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

var x_gate = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#257gh2
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
  "message0": "U3-Gate: Qubit %1 %2",
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

Blockly.Blocks['u3_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#p2rukd
  init: function() {
    this.jsonInit(U3_gate)
  }
};

var U2_gate = {
  "type": "u2_gate",
  "message0": "U2-Gate: Qubit %1 %2",
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

Blockly.Blocks['u2_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#925ze9
  init: function() {
    this.jsonInit(U2_gate)
  }
};

var U1_gate = {
  "type": "u1__gate",
  "message0": "U1-Gate: Qubit %1 %2",
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

Blockly.Blocks['u1_gate'] = { //https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#npnejq
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
  "message0": "RX-Gate: %1 Qubit %2",
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

Blockly.Blocks['rx_gate'] = { 
  init: function() {
    this.jsonInit(RX_gate)
  }
};

var RY_gate = {
  "type": "ry_gate",
  "message0": "RY-Gate: %1 Qubit %2",
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

Blockly.Blocks['ry_gate'] = { 
  init: function() {
    this.jsonInit(RY_gate)
  }
};

var RZ_gate = {
  "type": "rz_gate",
  "message0": "RZ-Gate: %1 Qubit %2",
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

Blockly.Blocks['rz_gate'] = { 
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
  "message0": "CRZ-Gate: %1 Qubit-1 %2 Qubit-2 %3",
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

Blockly.Blocks['crz_gate'] = { 
  init: function() {
    this.jsonInit(CRZ_gate)
  }
};

var CU1_gate = {
  "type": "cu1_gate",
  "message0": "CU1-Gate: %1 Qubit-1 %2 Qubit-2 %3",
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

Blockly.Blocks['cu1_gate'] = { 
  init: function() {
    this.jsonInit(CU1_gate)
  }
};

var CU3_gate = {
  "type": "cu3_gate",
  "message0": "CU3-Gate: %1 Qubit-1 %2 Qubit-2 %3",
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

Blockly.Blocks['cu3_gate'] = { 
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



