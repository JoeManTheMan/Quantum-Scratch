import * as Blockly from 'blockly/core';
import 'blockly/javascript';
import {generate_QASM, 
  built_in_gate_block, 
  var_def_block, 
  var_ref_block, 
  var_assignment_block, 
  measurement_block,
  if_block, 
  expression_block,
  loop_block,
  custom_function_def,
  custom_function_ref,
  n_bit_controlled_gate} from '../QasmStuff/QASM_generator.js';


const blocks = [];
export default blocks

Blockly.JavaScript['test_addition'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_x + ' + ' + value_y;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

Blockly.JavaScript['param_input'] = function(block) {
  var text__paraminput = block.getFieldValue(' ParamInput');
  // TODO: Assemble JavaScript into code variable.
  var code = text__paraminput;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['test_one'] = function(block) {
    var text_num = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = text_num;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['test_input'] = function(block) {
    var dropdown_drop = block.getFieldValue('DROP');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_drop;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['test_x_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC); 
    blocks.push(new built_in_gate_block('x', Math.random, [], [parseInt(value_qubit)]));
    // console.log(blocks)
    // console.log(generate_QASM(blocks, value_qubit))
    return "X";
    
  };

  Blockly.JavaScript['test_y_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('y', Math.random, [], [parseInt(value_qubit)]));
    // console.log(blocks)
    // console.log(generate_QASM(blocks, value_qubit))
    return "Y";
  };

  Blockly.JavaScript['test_z_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('z', Math.random, [], [parseInt(value_qubit)]));
    // console.log(blocks)
    // console.log(generate_QASM(blocks, value_qubit))
    return "Z";
  };

  Blockly.JavaScript['test_hadamard_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('h', Math.random, [], [parseInt(value_qubit)]));
    // console.log(blocks)
    // console.log(generate_QASM(blocks, value_qubit))
    return "H";
  };

  Blockly.JavaScript['u3_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param_2 = Blockly.JavaScript.valueToCode(block, 'Param 2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param_3 = Blockly.JavaScript.valueToCode(block, 'Param 3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('u3', Math.random, [parseInt(value_param_1), parseInt(value_param_2), parseInt(value_param_3)], [parseInt(value_qubit)]));;
    return "U3";
  }

  Blockly.JavaScript['u2_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param_2 = Blockly.JavaScript.valueToCode(block, 'Param 2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('u2', Math.random, [parseInt(value_param_1), parseInt(value_param_2)], [parseInt(value_qubit)]));;
    return "U2";
  };

  Blockly.JavaScript['u1_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('u1', Math.random, [parseInt(value_param_1)], [parseInt(value_qubit)]));;
    return "U1";
  };

  Blockly.JavaScript['cx_gate'] = function(block) {
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('cx', Math.random, [], [parseInt(value_qubit_1), parseInt(value_qubit_2)]));
    return "CX";
  };

  Blockly.JavaScript['id_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('id', Math.random, [], [parseInt(value_qubit)]));
    return "ID";
  };

  Blockly.JavaScript['s_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('s', Math.random, [], [parseInt(value_qubit)]));
    return "S";
  };

  Blockly.JavaScript['sdg_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('sdg', Math.random, [], [parseInt(value_qubit)]));
    return "SDG";
  };

  Blockly.JavaScript['t_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('t', Math.random, [], [parseInt(value_qubit)]));
    return "T";
  };

  Blockly.JavaScript['tdg_gate'] = function(block) {
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('tdg', Math.random, [], [parseInt(value_qubit)]));
    return "TDG";
  };

  Blockly.JavaScript['rx_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('rx', Math.random, [parseInt(value_param_1)], [parseInt(value_qubit)]));;
    return "RX";
  };

  Blockly.JavaScript['ry_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('ry', Math.random, [parseInt(value_param_1)], [parseInt(value_qubit)]));;
    return "RY";
  };

  Blockly.JavaScript['rz_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit = Blockly.JavaScript.valueToCode(block, 'Qubit', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('rz', Math.random, [parseInt(value_param_1)], [parseInt(value_qubit)]));;
    return "RZ";
  };

  Blockly.JavaScript['cz_gate'] = function(block) {
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('cz', Math.random, [], [parseInt(value_qubit_1),parseInt(value_qubit_2)]));
    return "CZ";
  };

  Blockly.JavaScript['cy_gate'] = function(block) {
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('cy', Math.random, [], [parseInt(value_qubit_1),parseInt(value_qubit_2)]));
    return "CY";
  };

  Blockly.JavaScript['ch_gate'] = function(block) {
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('ch', Math.random, [], [parseInt(value_qubit_1),parseInt(value_qubit_2)]));
    return "CH";
  };

  Blockly.JavaScript['crz_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('crz', Math.random, [parseInt(value_param_1)], [parseInt(value_qubit_1), parseInt(value_qubit_2)]));;
    return "CRZ";
  };

  Blockly.JavaScript['cu1_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('cu1', Math.random, [parseInt(value_param_1)], [parseInt(value_qubit_1), parseInt(value_qubit_2)]));;
    return "CU1";
  };

  Blockly.JavaScript['cu3_gate'] = function(block) {
    var value_param_1 = Blockly.JavaScript.valueToCode(block, 'Param 1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param_2 = Blockly.JavaScript.valueToCode(block, 'Param 2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_param_3 = Blockly.JavaScript.valueToCode(block, 'Param 3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit-1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit-2', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('cu3', Math.random, [parseInt(value_param_1), parseInt(value_param_2), parseInt(value_param_3)], [parseInt(value_qubit_1), parseInt(value_qubit_2)]));;
    return "CU3";
  };

  Blockly.JavaScript['ccx_gate'] = function(block) {
    var value_qubit_1 = Blockly.JavaScript.valueToCode(block, 'Qubit_1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_2 = Blockly.JavaScript.valueToCode(block, 'Qubit_2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_qubit_3 = Blockly.JavaScript.valueToCode(block, 'Qubit_3', Blockly.JavaScript.ORDER_ATOMIC);
    blocks.push(new built_in_gate_block('ccx', Math.random, [0], [parseInt(value_qubit_1),parseInt(value_qubit_2),parseInt(value_qubit_3)]));
    return "CCX";
  };

  Blockly.JavaScript['var_gate'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var text_input = block.getFieldValue('INPUT');
    var dropdown_type = block.getFieldValue('TYPE');
    new var_def_block(text_name, Math.random, dropdown_type, text_input);
    return "VAR";
  };

  Blockly.JavaScript['var_ref_gate'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    new var_ref_block(text_name, Math.random);
    return "REF";
  };

  Blockly.JavaScript['assignment_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_lhs = Blockly.JavaScript.valueToCode(block, 'lhs', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rhs = Blockly.JavaScript.valueToCode(block, 'rhs', Blockly.JavaScript.ORDER_ATOMIC);
    new var_assignment_block(text_name, Math.random, value_lhs, value_rhs);
    return "ASS";
  };

  Blockly.JavaScript['expression_block'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_lhs = Blockly.JavaScript.valueToCode(block, 'lhs', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_operator = block.getFieldValue('OPERATOR');
    var value_rhs = Blockly.JavaScript.valueToCode(block, 'rhs', Blockly.JavaScript.ORDER_ATOMIC);
    var_assignment_block(text_name, Math.random, dropdown_operator, [value_lhs, value_rhs]);
    return "EXP";
  };