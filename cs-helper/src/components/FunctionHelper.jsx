import React, { useState } from 'react';
import ChatScreen from './ChatScreen';
import functionsData from '../examples.json';
import './FunctionHelper.css';
import Banner from './Banner';

const FunctionHelper = () => {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [selectedInputs, setSelectedInputs] = useState({});
  const [prompt, setPrompt] = useState('');

  const handleFunctionClick = (func) => {
    setSelectedFunction(func);
    const defaultInputs = {};
    // Set default inputs to the first option for each input
    Object.keys(func.inputs).forEach((inputKey) => {
      defaultInputs[inputKey] = { value: func.inputs[inputKey][0].example, type: func.inputs[inputKey][0].type };
    });
    setSelectedInputs(defaultInputs);
    generatePrompt(func, defaultInputs);
  };

  const handleInputSelect = (inputKey, exampleValue, inputType) => {
    const updatedInputs = {
      ...selectedInputs,
      [inputKey]: { value: exampleValue, type: inputType },
    };
    setSelectedInputs(updatedInputs);
    generatePrompt(selectedFunction, updatedInputs);
  };

  const generatePrompt = (func, inputs) => {
    if (!func || !inputs) return;

    const inputsList = Object.entries(inputs).map(([key, { value, type }]) => `${key} (${type}): ${value}`);
    const promptText = `Write example C++ code for the ${func.name} function with inputs of ${inputsList.join(', ')}`;

    setPrompt(promptText);
  };

  const renderInputs = (inputs) => {
    const inputKeys = Object.keys(inputs);
  
    return (
      <div style={{ display: 'flex'}}>
        {inputKeys.map((inputKey) => (
          <div key={inputKey} style={{ display: 'flex', marginBottom: 10 }}>
            <h3 style={{ marginRight: 10 }}>{inputKey}</h3>
            <select
              value={selectedInputs[inputKey] ? selectedInputs[inputKey].value : inputs[inputKey][0].example}
              onChange={(e) => handleInputSelect(inputKey, e.target.value, e.target.selectedOptions[0].dataset.type)}
              style={{ marginRight: 10 }}
            >
              {inputs[inputKey].map((input, index) => (
                <option key={index} value={input.example} data-type={input.type}>
                  {`${input.type} (${input.example})`}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  };  

  return (
    <div>
      <Banner />
      <div className='center'>
        <h2>Choose a Function</h2>
        <div>
          {functionsData.functions.map((func, index) => (
            <button
              key={func.name}
              className={`custom-button ${index === 0 ? 'first-button' : index === functionsData.functions.length - 1 ? 'last-button' : ''}`}
              onClick={() => handleFunctionClick(func)}
            >
              {func.name}
            </button>
          ))}
        </div>
        <div>
          {selectedFunction && (
            <div>
              <div className='flexfunction'>
                <h2>{selectedFunction.name} :</h2>
                <h3 style={{marginLeft: '5px'}}>{selectedFunction.description}</h3>
              </div>
              <div className='flex-center'>
                <h3 className='h3flex'>Prompt:</h3>
                <div className='flex-center'>
                  <div className='promptflex'>{selectedFunction.basePrompt}</div>
                  <div>{renderInputs(selectedFunction.inputs)}</div>
                </div>
              </div>
              <ChatScreen prompt={prompt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FunctionHelper;