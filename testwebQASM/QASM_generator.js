// TODO: if statement - reads bit from creg
// variables - list, can refer to qubits, classical bits or angles - ints, qubits or angles
// control block, will conditionally execute a gate based off the state of other qubits, cannot be the same ones
// measurement block - measures a number of qubits, records the result in a classical bit for each qubit
// custom blocks/gates - takes a list of qubits and a list of gates, does some operations on them




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
        gate_name: "Not",
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

class block
{
    constructor(block_name, block_id)
    {
        this.block_name = block_name;
        this.block_id = block_id;
    }

}

class built_in_gate_block extends block
{
    constructor(block_name, block_id, parameters, qubit_operands)
    {
        super(block_name, block_id);
        this.block_type = "built_in_gate";
        this.parameters = parameters;
        this.qubit_operands = qubit_operands;
    }
}

// variable can be either a list or a single value
// if var_type is "angle_list" or "integer_list", it must be an array
// if var_type is "angle" or "integer", it must be a single value
class var_definition_block extends block
{
    constructor(block_name, block_id, var_type, value = 0)
    {
        super(block_name, block_id);
        this.block_type = "variable_def";
        this.var_type = var_type;
        this.value = value;
    }
}

// refers to a variable that's already defined
class var_ref_block extends block
{
    constructor(block_name, block_id)
    {
        super(block_name, block_id);
        this.block_type = "variable_ref";
    }
}

// an operation that modifies the value of a variable
// lhs is the left hand side of the assignment, a variable reference
// rhs is the right hand side of the equation, evaluates to a value
class var_assignment_block extends block
{
    constructor(block_name, block_id, lhs, rhs)
    {
        super(block_name, block_id);
        this.lhs = lhs; // should be a variable reference
        this.rhs = rhs; // should evaluate to a value of the same type as lhs
        this.block_type = "var_assignment";
    }
}

// a measurement on qubits that gets saved into cregs
class measurement_block extends block
{
    constructor(block_name, block_id, qubit_operands, measure_all=false)
    {
        super(block_name, block_id);
        this.qubit_operands = qubit_operands;
        this.measure_all = measure_all;
        this.block_type = "measurement";
    }
}



// operator: a string, e.g "+", "-", 
// operands: 2 values, var_ref_blocks, or expression_blocks that the operator will act on
// operands should refer/evaluate to the same type
// this is expected to be used in the right hand side of an assignment block
class expression_block extends block
{
    constructor(block_name, block_id, operator, operands)
    {
        super(block_name, block_id);
        this.operator = operator;
        this.operands = operands;
        this.block_type = "expression";
    }

}

// values is an array containing the value to compare the if statement against
// value should be an array with only 1 element
// multiple values may be supported in the future
// gates is the gate block to be executed if the condition is true 
// multiple gates may be supported in the future
class if_block extends block
{
    constructor(block_name, block_id, values, gates)
    {
        super(block_name, block_id);
        this.values = values;
        this.gates = gates;
        this.block_type = "if";
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
function generate_QASM(blocks)
{
    // puts all the variables into this object
    // checks for duplicates
    // TODO: possibly check variable dependancies for cycles
    let variables = preprocess_variables(blocks);
    console.log(variables);

    // this value will contain the highest number of qubit that is used
    // an array is chosen so that num_qubits can be passed by reference instead of value
    let num_qubits = [0]; 
    
    let qasm = [["OPENQASM 2.0;\ninclude \"qelib1.inc\";\n"]];
    qasm.push(["qreg q["]); // these will be filled in later with the max value of qubits
    qasm.push(["creg c["]);

    // goes over each block, adding their respective qasm to the qasm array
    // 1 is added to num_qubits because it is set to the value of the highest qubit operand but is 0 indexed
    process_blocks(qasm, blocks, variables, num_qubits);
    num_qubits[0] += 1;

    qasm[1][0] += `${num_qubits}];\n`;
    qasm[2][0] += `${num_qubits}];\n`;
    return qasm;
}

/*
 * qasm is an array that the qasm will be pushed to, each line being an array with a qasm string and block id
 * blocks is the blocks to be processed
 * variables is a list of key/value pairs that give all the variables their values
 * returns the number of qubits (the highest number found inside the blocks as a qubit operand after processing)
 * type restrictions restrict the valid types that the blocks can be
 */
function process_blocks(qasm, blocks, variables, num_qubits, type_restrictions={})
{
    for(let i = 0; i < blocks.length; i++)
    {

        switch(blocks[i].block_type)
        {
            case "built_in_gate":
            {
                let block = expand_built_in_variables(blocks[i], variables);
                if(block.block_name in built_in_gates)
                {
                    if(is_valid_built_in(block))
                    {
                        num_qubits[0] = Math.max(num_qubits[0], ...block.qubit_operands);
                        qasm.push([built_in_gate_to_QASM(block), block.block_id]);
                    }
                } else 
                {
                    console.log("block does not exist, or has wrong type\n" + block);
                }
                break;
            } 
            case "var_assignment":   
            {
                // does the variable assignment described in the block
                variable_assignment(blocks[i], variables);
                console.log("Variables after this var assignment are");
                console.log(variables);
                break;
            }
            case "measurement":
            {
                let block = expand_measurement_variables(blocks[i], variables);

                num_qubits[0] = Math.max(num_qubits[0], ...block.qubit_operands);
                qasm.push([measurement_block_to_qasm(block), block.block_id]);
                break;
            }
            case "if":
            {
                // TODO: check validity of if-block
                let block = expand_if_variables(blocks[i], variables);

                qasm.push([if_block_to_qasm(block, variables, num_qubits), block.block_id]);
                break;
            }
            default:
                //console.log("something went wrong");
                break;
        }
    }
}


/* 
 * Reads the block name, and finds the corresponding built in gate, and converts it into QASM
 * Takes a block as a parameter. 
 */
function built_in_gate_to_QASM(block)
{
    
    let gate = built_in_gates[block.block_name];

    let gate_qasm = "";
    
    gate_qasm += gate.QASM_symbol;

    // concatenate the parameters, comma separated in brackets. 
    if(gate.num_parameters > 0)
    {
        gate_qasm += "(" + block.parameters.join() + ")";
    }
    
    // concatenate the operands, comma separated
    if(gate.num_qubit_operands > 0)
    {
        gate_qasm += ' ';
        gate_qasm += block.qubit_operands.map(operand => `q[${operand}]`).join(",");
    }
    gate_qasm += ';\n';

    return gate_qasm;
}

/*
 * Checks if a built in block is valid
 * Checks that parameters are between 0 and 2 pi
 * Checks that operands are greater than 0, are integers, and do not repeat
 * Checks that there are the correct number of operands and parameters
 * returns a boolean, true if the built in block is valid, false otherwise
 */
function is_valid_built_in(block)
{
    let gate = built_in_gates[block.block_name];

    // check for equality in the number of parameters
    if(gate.num_parameters != block.parameters.length)
    {
        console.log(`expected ${gate.num_parameters} parameters, found ${block.parameters.length}  parameters`);
    }

    if(gate.num_qubit_operands !=  block.qubit_operands.length)
    {
        console.log(`expected ${gate.num_qubit_operands} operands, found ${block.qubit_operands.length}  operands`);
    }

    // validate the parameters (numbers between 0 and 2 pi)
    for(let parameter of block.parameters)
    {
        if(!is_valid_param(parameter))
        {
            return false;
        }
    }

    // checks for duplicate operand values, values less than 0, non int values
    // an object to put operands in, will be checked for duplicates
    let operands = {};
    for(let i = 0; i < block.qubit_operands.length; i++)
    {
        if(!is_valid_qubit_operand(block.qubit_operands[i]))
        {
            console.log("operands are not valid integers: ");
            console.log(block.qubit_operands[i]);
            console.log("num is int " + Number.isInteger(block.qubit_operands[i]) + " block.qubit_operands[i]");
            console.log(typeof(block.qubit_operands[i]));
            console.log(block);
            return false;
        }
        
        if(block.qubit_operands[i] in operands)
        {  
            console.log("duplicate operands: \"" + block.qubit_operands[i] + "\"");
            return false;
        } else
        {
            operands[block.qubit_operands[i]] = true;
        }
    }
    return true;
}

/*
 * takes the array of blocks, puts all the variables into a new object to allow for easier lookup later
 * also checks for duplicates of variables 
 */
function preprocess_variables(blocks)
{
    let variables = {};
    for(let i = 0; i < blocks.length; i++)
    {
       
        if(blocks[i].block_type == "variable_def")
        {
            let var_def_block = blocks[i];

            // check if variable name already exists
            if(var_def_block.block_name in variables)
            {
                console.log(`error: ${blocks[i].block_name} variable is defined more than once`);
                continue;
            };

            // assigns variable to object property, with the name being the key, this will be useful to look up the variable later
            variables[var_def_block.block_name] = { 
                block_id: var_def_block.block_id, 
                var_type: var_def_block.var_type,
                value: var_def_block.value
            };
            
        }
        // if variable name in variables, error
    }
    return variables;
}

/* goes through the blocks parameters and replaces variables with their values
 * returns a copy of the block
 * operates on built in blocks
 * if there are variable references, these are replaced by the value of the variable
 * returns a copy of the block with the variables replaced with numbers
 * 
 *  TODO: reduce duplicated code.
 */
function expand_built_in_variables(block, variables)
{
    //creates a copy of the block
    let expanded_block = {};
    Object.assign(expanded_block, block);

    if("qubit_operands" in expanded_block)
    {
        expand_array_vars(expanded_block.qubit_operands, variables, "integer");
        
    } else
    {
        console.log("error, block is missing attributes");
    }
    
    if("parameters" in expanded_block)
    {
        expand_array_vars(expanded_block.parameters, variables, "angle");
    } else
    {
        console.log("error, block is missing attributes");
    }

    return expanded_block;
}

function variable_assignment(block, variables)
{
    console.log("block.lhs");
    console.log(block.lhs);
    console.log(block);
    console.log("variables");
    console.log(variables);

    let expanded_block = {};
    Object.assign(expanded_block, block);

    
    // finds variable with the given name
    let variable = variables[expanded_block.lhs.block_name];


    if(expanded_block.rhs.block_type == "expression")
    {
        console.log("expanded_block.rhs.block_type is expression");
        console.log(expanded_block);
        expanded_block.rhs = evaluate_expression_block(expanded_block.rhs, variables, expanded_block.lhs.var_type);
    } else
    {
        console.log("expanded_block.rhs.block_type is not expression, it is ");
        console.log(expanded_block.rhs.block_type);
        console.log("expanded block");
        console.log(expanded_block)
    }

    variable.value = expanded_block.rhs;
    console.log(variables);
}

function is_valid_param(parameter)
{

    if(typeof(parameter) != "number")
    {
        return false;
    }

    if(parameter < 0 || parameter > (2 * Math.PI))
    {
        console.log("invalid parameter in block " + parameter + " is not between 0 and 2PI");
        return false;
    }
    return true;
    
}

function is_valid_qubit_operand(qubit_operand)
{
    if(qubit_operand < 0 || !Number.isInteger(qubit_operand))
    {
        return false;
    }

    return true;
}

// values array is the array that may contain variables that have a specified type
// variables is an object containing key/value pairs with variables and their values
// var_type is a string, if it is "angle", then "angle" and "angle_list" values will be processed
function expand_array_vars(values_array, variables, var_type)
{
    for(let i = 0; i < values_array.length; i++)
    {
        let value = values_array[i];

        if(value.block_type == "variable_ref")
        {
            // search for variable with the name found in the variable reference
            console.log(value.block_name);
            let variable = variables[value.block_name];

            // expands the list in-place, then decrements i and restarts the loop at the same index
            if(variable.var_type == (var_type + "_list"))
            {
                values_array.splice(i, 1, ...(variable.value));
                i--;
                continue;
            }

            if(variable.value != undefined)
            {
                values_array[i] = variable.value;
            } else
            {
                console.log("something went wrong with expanding variables");
            }
        }
    }
}

// takes in a measurement block, and key/values pairs of variables
// returns a copy of the object with variables replaced with constants
function expand_measurement_variables(block, variables)
{
    let expanded_block = {};
    Object.assign(expanded_block, block);

    if("qubit_operands" in expanded_block)
    {
        expand_array_vars(expanded_block.qubit_operands, variables, "integer");
    } else
    {
        console.log("block has missing properties");
    }

    return expanded_block;
}


function measurement_block_to_qasm(block)
{
    let qasm = "";

    if(block.measure_all)
    {
        qasm = "measure q -> c;\n";
    } else
    {
        qasm += block.qubit_operands.map(operand => `measure q[${operand}] -> c[${operand}]\n`).join('');
    }
    return qasm;
}

function expand_if_variables(block, variables)
{
    let expanded_block = {};

    Object.assign(expanded_block, block);

    if("values" in expanded_block)
    {
        expand_array_vars(expanded_block.values, variables, "integer");
    } else
    {
        console.log("if\" block has missing properties");
    }

    return expanded_block;
}

function if_block_to_qasm(block, variables, num_qubits)
{
    let gate_qasm = [];
    let qasm = "";

    qasm = `if(c==${block.values[0]}) `;

    process_blocks(gate_qasm, block.gates, variables, num_qubits, {built_in_gate: true});

    qasm += gate_qasm[0][0];



    return qasm;
};

// recursively evaluates expression blocks, returns a number
function evaluate_expression_block(block, variables, type)
{
    let lhs = block.operands[0];
    let rhs = block.operands[1];

    if(lhs.block_type == "variable_ref" || rhs.block_type == "variable_ref")
    {
        expand_array_vars(block.operands, variables, type);
    }

    lhs = block.operands[0];
    rhs = block.operands[1];
    
    if(lhs.block_type == "expression")
    {
        lhs = evaluate_expression_block(lhs, variables, type);

    } 

    if(rhs.block_type == "expression")
    {
        rhs = evaluate_expression_block(rhs, variables, type);
    }

    if(typeof(lhs) == "number" && typeof(rhs) == "number")
    {
        switch(block.operator)
        {
            case "+":
            {
                return lhs + rhs;
                break;
            }
            case "-":
            {
                return lhs - rhs;
                break;
            }
            default:
            {
                console.log("unsupported operator:");
                console.log(block.operator);
                console.log("is not supported");
            }
        }
    } else
    {
        console.log("something went wrong with evaluating expressions");
        console.log("block is");
        console.log(block);
    }

}


export {generate_QASM, 
    built_in_gate_block, 
    var_definition_block, 
    var_ref_block, 
    var_assignment_block, 
    measurement_block,
    if_block, 
    expression_block};

