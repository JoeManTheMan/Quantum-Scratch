
const built_in_gates = 
{
    h: {
        gate_name: "Hadamard",
        num_parameters: 0, //parameters that would be inside brackets e.g u(pi)
        num_qubit_operands: 1,   //num of qubits that the block operates on
        QASM_symbol: "h"
    },
    u3:
    {
        gate_name: "",
        num_parameters: 3,
        num_qubit_operands: 1,
        QASM_symbol: "u3"
    },
    u2:
    {
        gate_name: "",
        num_parameters: 2,
        num_qubit_operands: 1,
        QASM_symbol: "u2"
    },
    u1:
    {
        gate_name: "",
        num_parameters: 1,
        num_qubit_operands: 1,
        QASM_symbol: "u1"
    },
    cx:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 2,
        QASM_symbol: "cx"
    },
    id:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "id"
    },
    x:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "x"
    },
    y:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "y"
    },
    z:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "z"
    },
    s:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "s"
    },
    sdg:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "sdg"
    },
    t:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "t"
    },
    tdg:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 1,
        QASM_symbol: "tdg"
    },
    rx:
    {
        gate_name: "",
        num_parameters: 1,
        num_qubit_operands: 1,
        QASM_symbol: "rx"
    },
    ry:
    {
        gate_name: "",
        num_parameters: 1,
        num_qubit_operands: 1,
        QASM_symbol: "ry"
    },
    rz:
    {
        gate_name: "",
        num_parameters: 1,
        num_qubit_operands: 1,
        QASM_symbol: "rz"
    },
    cz:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 2,
        QASM_symbol: "cz"
    },
    cy:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 2,
        QASM_symbol: "cy"
    },
    ch:
    {
        gate_name: "controlled-H",
        num_parameters: 0,
        num_qubit_operands: 2,
        QASM_symbol: "ch"
    },
    ccx:
    {
        gate_name: "",
        num_parameters: 0,
        num_qubit_operands: 3,
        QASM_symbol: "ccx"
    },
    crz:
    {
        gate_name: "",
        num_parameters: 1,
        num_qubit_operands: 2,
        QASM_symbol: "crz"
    },
    cu1:
    {
        gate_name: "",
        num_parameters: 1,
        num_qubit_operands: 2,
        QASM_symbol: "cu1"
    },
    cu3:
    {
        gate_name: "",
        num_parameters: 3,
        num_qubit_operands: 2,
        QASM_symbol: "cu3"
    }

}

/*
 * Takes 2 parameters, blocks representing the code, and the number of qubits in the circuit
 * blocks are objects with the following properties:
 * block_name - a string containing the name of the block
 * block_type - a string containing the type of the block
 * parameters - an array of numbers, to be the parameters of the gate, e.g cu3(parameter1, parameter2, parameter3)
 * qubit_operands - an array of numbers, representing the qubits that the block operates on, in order.
 */
function generate_QASM(blocks, num_qubits)
{
    let qasm = "OPENQASM 2.0;\ninclude \"qelib1.inc\";\n"
    qasm += `qreg q[${num_qubits}];\n`

    //go over each block, adding their respective qasm
    for(let i = 0; i < blocks.length; i++)
    {
        let block = blocks[i];
        switch(block.block_type)
        {
            case "built_in_gate":
            {
                if(block.block_name in built_in_gates)
                {
                    qasm += built_in_gate_to_QASM(block);
                } else 
                {
                    console.log("block does not exist, or has wrong type\n" + block)
                }
                
                break;
            } 
            default:
                console.log("something went wrong");
                break;
        }
    }
    return qasm;
}

/* 
 * Reads the block name, and finds the corresponding built in gate, and converts it into QASM
 * Takes a block as a parameter. 
 */
function built_in_gate_to_QASM(block)
{
    
    let gate = built_in_gates[block.block_name];

    let gate_qasm = "";

    if(gate.num_parameters == block.parameters.length && gate.num_qubit_operands ==  block.qubit_operands.length)
    {
        gate_qasm += gate.QASM_symbol;

        //concatenate the parameters, comma separated in brackets. 
        if(gate.num_parameters > 0)
        {
            gate_qasm += "(" + block.parameters.join() + ")";
        }
        
        //concatenate the operands, comma separated
        if(gate.num_qubit_operands > 0)
        {
            gate_qasm += ' ';
            gate_qasm += block.qubit_operands.map(operand => `q[${operand}]`).join(",");
        }
        gate_qasm += ';\n';
    }
    return gate_qasm;
}

export {generate_QASM};

