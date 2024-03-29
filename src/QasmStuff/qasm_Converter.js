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

    var QuantumCircuit = require("quantum-circuit");
    //import QuantumCircuit from 'quantum-circuit';

function qasmConverter(blocks){    
    var beginning_blocks = JSON.stringify(blocks, null, ' ');

    
    var circuit = new QuantumCircuit;
    var num_qubits = 6;

    var start = performance.now();
    let {qasm, errors} = generate_QASM(blocks);
    let qasm_string = qasm.reduce((previous_string, current_string) => previous_string + current_string[0]);

    var end = performance.now();

    console.log(`time taken is ${end - start} ms`);

    var end_blocks = JSON.stringify(blocks, null, ' ');

    if(beginning_blocks != end_blocks)
        {
            console.log("beginning blocks");
            console.log(beginning_blocks);
            console.log("end blocks");
            console.log(end_blocks);
        } 
    else
        {
            console.log("hooray, beginning blocks is identical to ending blocks");
            // console.log(beginning_blocks);
        }

    console.log(qasm_string);
    circuit.importQASM(qasm_string, function(errors) {
        console.log(errors);
    });

    console.log(circuit.run());

    console.log(circuit.exportToQASM());
}

function generateCircuit(qasm)
{
    let circuit = new QuantumCircuit;

    circuit.importQASM(qasm, function(errors) {
        console.log(errors);
    });
    return circuit;
}

export default qasmConverter;

export {generateCircuit};