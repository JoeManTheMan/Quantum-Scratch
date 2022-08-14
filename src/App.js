/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './App.css';

import logo from './logo.svg';

import BlocklyComponent, { Block, Value, Field, Shadow, Category } from './Blockly';

import BlocklyJS from 'blockly/javascript';

import './blocks/customblocks';
import './generator/generator';
import blocks from './generator/generator';
import generate_QASM from './QasmStuff/QASM_generator';
import qasmConverter from './QasmStuff/qasm_Converter';
import ProbabilitiesGraph, {testData} from './visualisations/graph';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.state = {data: []};
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    //console.log(code);
    //console.log(blocks)
    console.log(generate_QASM(blocks, 6));
    qasmConverter(blocks);
    //qasmConverter(blocks);
  }

  updateGraphState = (graphData) => 
  {
    this.setState({data: graphData});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.generateCode}>Convert</button>
          <BlocklyComponent ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          >
          <Category name="Built_in_gate_blocks">
            <Block type="test_input" />
            <Block type="test_x_gate" />
            <Block type="test_y_gate" />
            <Block type="test_z_gate" />
            <Block type="test_hadamard_gate" />
            <Block type="u3_gate" />
            <Block type="u2_gate" />
            <Block type="u1_gate" />
            <Block type="cx_gate" />
            <Block type="id_gate" />
            <Block type="s_gate" />
            <Block type="sdg_gate" />
            <Block type="t_gate" />
            <Block type="tdg_gate" />
            <Block type="rx_gate" />
            <Block type="ry_gate" />
            <Block type="rz_gate" />
            <Block type="cz_gate" />
            <Block type="cy_gate" />
            <Block type="ch_gate" />
            <Block type="crz_gate" />
            <Block type="cu1_gate" />
            <Block type="cu3_gate" />
            <Block type="ccx_gate" />
          </Category>
          <Category name="Variable_Blocks">
            <Block type="var_def_gate" />
            <Block type="var_ref_gate" />
            <Block type="assignment_block" />
            <Block type="expression_block" />
            <Block type="measurement_block" />
            <Block type="meaurement_block_true" />
            <Block type="if_block" />
            <Block type="loop_block" />
            <Block type="custom_function_def" />
            <Block type="custom_function_ref" />
            <Block type="n_bit_toffoli_to_qasm" />
          </Category>
          </BlocklyComponent>
          <button onClick={() => this.updateGraphState(testData)}> Update Graph </button>
        </header>
        <div >
        <BlocklyComponent ref={this.simpleWorkspace}
        readOnly={false} trashcan={true} media={'media/'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true
        }}
        >
        </BlocklyComponent>
        </div>

        <div>
          <ProbabilitiesGraph data={this.state.data} />
        </div>
        
      </div>
    );
  }
}

export default App;
