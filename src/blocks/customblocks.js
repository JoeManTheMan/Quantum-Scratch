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
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';


var test = {
  "type": "built_in_gate_block",
  "message0": "%1 %2 %3 %4 %5 %6 %7 %8",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "",
      "text": "Block Name"
    },
    {
      "type": "input_value",
      "name": "block_name",
      "check": "String"
    },
    {
      "type": "field_label_serializable",
      "name": "",
      "text": "Block ID"
    },
    {
      "type": "input_value",
      "name": "block_id",
      "check": "Number"
    },
    {
      "type": "field_label_serializable",
      "name": "",
      "text": "Qubit Operands"
    },
    {
      "type": "input_value",
      "name": "qubit_operands",
      "check": "Number"
    },
    {
      "type": "field_label_serializable",
      "name": "",
      "text": "Parameters"
    },
    {
      "type": "input_value",
      "name": "parameters",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_test'] = {
  init: function() {
    this.jsonInit(test);
  }
};

var addition = {
  "type": "addition",
  "message0": "%1 + %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_addition'] = {
  init: function() {
    this.jsonInit(addition)
  }
};

var Param_Input = {
  "type": "param_input",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": " ParamInput",
      "text": ""
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['param_input'] = {
  init: function() {
    this.jsonInit(Param_Input)
  }
};

var one = {
  "type": "number_type",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "NUM",
      "text": ""
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_one'] = {
  init: function() {
    this.jsonInit(one)
  }
};

var input = {
  "type": "block_type",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DROP",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ],
        [
          "9",
          "9"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_input'] = {
  init: function() {
    this.jsonInit(input)
  }
};

var x_gate = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#v8faew
  "type": "x_gate",
  "message0": "X-Gate: Qubit %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_x_gate'] = {
  init: function() {
    this.jsonInit(x_gate)
  }
};

var y_gate = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jqk6wx
  "type": "y_gate",
  "message0": "Y-Gate: Qubit %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_y_gate'] = {
  init: function() {
    this.jsonInit(y_gate)
  }
};

var z_gate = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#midzok
  "type": "z_gate",
  "message0": "Z-Gate: Qubit %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_z_gate'] = {
  init: function() {
    this.jsonInit(z_gate)
  }
};

var hadamard_gate = {
  "type": "hadamard_gate",
  "message0": "Hadamard-Gate: Qubit %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_hadamard_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gzgqty
  init: function() {
    this.jsonInit(hadamard_gate)
  }
};

var U3_gate = {
  "type": "u3_gate",
  "message0": "U3-Gate: %1 Param 1 %2 Param 2 %3 Param 3 %4 Qubit %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Param 2"
    },
    {
      "type": "input_value",
      "name": "Param 3"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['u3_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#eynyor
  init: function() {
    this.jsonInit(U3_gate)
  }
};

var U2_gate = {
  "type": "u2_gate",
  "message0": "U2-Gate: %1 Param 1 %2 Param 2 %3 Qubit %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Param 2"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['u2_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hhbmk6
  init: function() {
    this.jsonInit(U2_gate)
  }
};

var U1_gate = {
  "type": "u1_gate",
  "message0": "U1-Gate: %1 Param 1 %2 Qubit %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['u1_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dknmvh
  init: function() {
    this.jsonInit(U1_gate)
  }
};

var CX_gate = {
  "type": "cx_gate",
  "message0": "CX-Gate: %1 Qubit-1 %2 Qubit-2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['cx_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yanx7b
  init: function() {
    this.jsonInit(CX_gate)
  }
};

var ID_gate = {
  "type": "id_gate",
  "message0": "ID-Gate: %1 Qubit %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['id_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3jptz8
  init: function() {
    this.jsonInit(ID_gate)
  }
};

var S_gate = {
  "type": "s_gate",
  "message0": "S-Gate: %1 Qubit %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['s_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3jptz8
  init: function() {
    this.jsonInit(S_gate)
  }
};

var SDG_gate = {
  "type": "sdg_gate",
  "message0": "SDG-Gate: %1 Qubit %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['sdg_gate'] = { 
  init: function() {
    this.jsonInit(SDG_gate)
  }
};

var T_gate = {
  "type": "t_gate",
  "message0": "T-Gate: %1 Qubit %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['t_gate'] = { 
  init: function() {
    this.jsonInit(T_gate)
  }
};

var TDG_gate = {
  "type": "tdg_gate",
  "message0": "TDG-Gate: %1 Qubit %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['tdg_gate'] = { 
  init: function() {
    this.jsonInit(TDG_gate)
  }
};

var RX_gate = {
  "type": "rx_gate",
  "message0": "RX-Gate: %1 Param 1 %2 Qubit %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['rx_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gmv2qz
  init: function() {
    this.jsonInit(RX_gate)
  }
};

var RY_gate = {
  "type": "ry_gate",
  "message0": "RY-Gate: %1 Param 1 %2 Qubit %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['ry_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pabgmm
  init: function() {
    this.jsonInit(RY_gate)
  }
};

var RZ_gate = {
  "type": "rz_gate",
  "message0": "RZ-Gate: %1 Param 1 %2 Qubit %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['rz_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5dptcp
  init: function() {
    this.jsonInit(RZ_gate)
  }
};

var CZ_gate = {
  "type": "cz_gate",
  "message0": "CZ-Gate: %1 Qubit-1 %2 Qubit-2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['cz_gate'] = { 
  init: function() {
    this.jsonInit(CZ_gate)
  }
};

var CY_gate = {
  "type": "cy_gate",
  "message0": "CY-Gate: %1 Qubit-1 %2 Qubit-2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['cy_gate'] = { 
  init: function() {
    this.jsonInit(CY_gate)
  }
};

var CH_gate = {
  "type": "ch_gate",
  "message0": "Controlled-H-Gate: %1 Qubit-1 %2 Qubit-2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['ch_gate'] = { 
  init: function() {
    this.jsonInit(CH_gate)
  }
};

var CRZ_gate = {
  "type": "crz_gate",
  "message0": "RZ-Gate: %1 Param 1 %2 Qubit-1 %3 Qubit-2 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['crz_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#h328w5
  init: function() {
    this.jsonInit(CRZ_gate)
  }
};

var CU1_gate = {
  "type": "cu1_gate",
  "message0": "CU1-Gate: %1 Param 1 %2 Qubit-1 %3 Qubit-2 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['cu1_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rxppai
  init: function() {
    this.jsonInit(CU1_gate)
  }
};

var CU3_gate = {
  "type": "cu3_gate",
  "message0": "CU3-Gate: %1 Param 1 %2 Param 2 %3 Param 3 %4 Qubit-1 %5 Qubit-2 %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Param 1"
    },
    {
      "type": "input_value",
      "name": "Param 2"
    },
    {
      "type": "input_value",
      "name": "Param 3"
    },
    {
      "type": "input_value",
      "name": "Qubit-1"
    },
    {
      "type": "input_value",
      "name": "Qubit-2"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['cu3_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sknoba
  init: function() {
    this.jsonInit(CU3_gate)
  }
};

var CCX_gate = {
  "type": "ccx_gate",
  "message0": "CCX-Gate: %1 Qubit_1 %2 Qubit_2 %3 Qubit-3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Qubit_1"
    },
    {
      "type": "input_value",
      "name": "Qubit_2"
    },
    {
      "type": "input_value",
      "name": "Qubit_3"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['ccx_gate'] = { 
  init: function() {
    this.jsonInit(CCX_gate)
  }
};

var Var_Def_gate = {  //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#thggpb
  "type": "var_gate",
  "message0": "Variable Definition %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "field_input",
      "name": "INPUT",
      "text": "Value"
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "integer",
          "INTEGER"
        ],
        [
          "int_list",
          "INT_LIST"
        ],
        [
          "angle",
          "ANGLE"
        ],
        [
          "angle_list",
          "ANGLE_LIST"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['var_def_gate'] = { 
  init: function() {
    this.jsonInit(Var_Def_gate)
  }
};

var Var_Ref_gate = {
  "type": "var_ref_gate",
  "message0": "Ref %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['var_ref_gate'] = { 
  init: function() {
    this.jsonInit(Var_Ref_gate)
  }
};

var Assignment_Block = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#f7i8nr
  "type": "assignment_block",
  "message0": "%1 %2 %3 = %4 %5",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "lhs"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rhs"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
} 

Blockly.Blocks['assignment_block'] = { 
  init: function() {
    this.jsonInit(Assignment_Block)
  }
};

var Expression_Block = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#53fu5j
  "type": "expression_block",
  "message0": "%1 %2 %3 %4 %5 %6",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "lhs"
    },
    {
      "type": "field_dropdown",
      "name": "OPERATOR",
      "options": [
        [
          "+",
          "ADDITION"
        ],
        [
          "-",
          "SUBTRACTION"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rhs"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['expression_block'] = { 
  init: function() {
    this.jsonInit(Expression_Block)
  }
};

var Measurement_Block_True = {
  "type": "measurement_gate_true",
  "message0": "Measurement Block -  True %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "field_input",
      "name": "QUBIT",
      "text": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['measurement_gate_true'] = { 
  init: function() {
    this.jsonInit(Measurement_Block_True)
  }
};

var Measurement_Block = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fihfcc
  "type": "measurement_gate",
  "message0": "Measurement Block -  %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "QUBIT",
      "text": "Qubit"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['measurement_gate'] = { 
  init: function() {
    this.jsonInit(Measurement_Block)
  }
};

var If_Block = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9xq2zw
  "type": "if_block",
  "message0": "If Block %1 %2 Values %3 Gate %4",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "VALUE"
    },
    {
      "type": "input_value",
      "name": "GATE"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['if_block'] = { 
  init: function() {
    this.jsonInit(If_Block)
  }
};

var Loop_Block = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#4fx65f
  "type": "loop_block",
  "message0": "Loops %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NUM"
    },
    {
      "type": "input_statement",
      "name": "Blocks"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['loop_block'] = { 
  init: function() {
    this.jsonInit(Loop_Block)
  }
};

var Custom_Function_Def = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rwdh63x
  "type": "custom_function_def",
  "message0": "Function %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "Blocks"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['custom_function_def'] = { 
  init: function() {
    this.jsonInit(Custom_Function_Def)
  }
};

var Custom_Function_Ref = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#byprkm
  "type": "custom_function_ref",
  "message0": "Custom Function Ref %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Name"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['custom_function_ref'] = { 
  init: function() {
    this.jsonInit(Custom_Function_Ref)
  }
};

var N_Bit_Toffoli_To_Qasm = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#decbyb
  "type": "n_bit_toffoli_to_qasm",
  "message0": "N Bit Toffoli To Qasm - %1 Controls %2 AntiControls %3 Target %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "CONTROL_QUIBIT"
    },
    {
      "type": "input_value",
      "name": "ANTICONTROL_QUBIT"
    },
    {
      "type": "input_value",
      "name": "TARGET_QUBIT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
} 

Blockly.Blocks['n_bit_toffoli_to_qasm'] = { 
  init: function() {
    this.jsonInit(N_Bit_Toffoli_To_Qasm)
  }
};