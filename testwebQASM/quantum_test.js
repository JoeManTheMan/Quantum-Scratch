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
    n_bit_controlled_gate} from './QASM_generator.js';

/*var circuit = new QuantumCircuit();
circuit.addGate("h", 0, 1);
circuit.addGate("h", 3, 1);
circuit.addGate("h", 1, 1);
circuit.addGate("h", 0, 2);
circuit.addGate("h", 0, 3);



var circ_qasm = circuit.exportToQASM();

circuit.importQASM("OPENQASM 2.0;\nimport \"qelib1.inc\";\nqreg q[2];\nh q[0];\ncx q[0],q[1];\n", function(errors) {
    console.log(errors);
});*/   

//circuit.run();

//var obj = circuit.save;


//console.log(circuit.probabilities());

//console.log(obj);

var text = document.getElementById('text');

//text.innerText = circ_qasm;

// an array of blocks
const blocks = [];


let nested_expr_blk = new expression_block("", undefined, "+", [new var_ref_block("b", undefined), 2]);
let expr_blk = new expression_block("", undefined, "+", [nested_expr_blk, 2]);
let var_assgn = new var_assignment_block("", undefined, new var_ref_block("b", undefined), expr_blk);

let had_block = new built_in_gate_block("h", undefined, [], [1]);
let var_b = new var_ref_block("b", undefined);

let var_assgn2 = new var_assignment_block("", undefined, var_b, expr_blk);
let had_block2 = new built_in_gate_block("h", undefined, [], [var_b]);



let cust_func = new custom_function_def("cust", undefined, 0, 0, [new built_in_gate_block("h", undefined, [], [0]),
                                                                new built_in_gate_block("u1", undefined, [0.6], [0]),
                                                                new built_in_gate_block("u1", undefined, [0.4], [new var_ref_block("a", undefined)]),
                                                                new built_in_gate_block("u1", undefined, [0.9], [3])]);

blocks.push(
    new built_in_gate_block("h", undefined, [], [0]),
    new built_in_gate_block("u1", undefined, [0.6], [0]),
    new built_in_gate_block("u1", undefined, [0.4], [new var_ref_block("a", undefined)]),
    //new built_in_gate_block("u1", undefined, [0.9, 3], [3]), // fails due to more parameters than expected
    //new built_in_gate_block("u1", undefined, [0.2], [2, 4]), // fails due to more operands than expected
    new built_in_gate_block("u3", undefined, [0.5, 1, new var_ref_block("ang", undefined)], [5]),
    //new built_in_gate_block("ch", undefined, [], [1, 1]), // fails due to duplicate operands
    new built_in_gate_block("cx", undefined, [], [new var_ref_block("lst_var", undefined)]),
    new built_in_gate_block("cu3", undefined, [new var_ref_block("lst_var_angles")], [new var_ref_block("lst_var", undefined)]),

    new var_assignment_block("", undefined, new var_ref_block("a", undefined), 2),
    new built_in_gate_block("u1", undefined, [0.7], [new var_ref_block("a", undefined)]),

    new var_def_block("a", undefined,  "integer", 1),
    new var_def_block("b", undefined,  "integer", 0),
    //new var_def_block("23", undefined,  "integer", "a"),
    new var_def_block("ang", undefined,  "angle", 2.1),
    new var_def_block("lst_var_angles", undefined, "angle_list", [1.4, 2, 4]),
    new var_def_block("lst_var", undefined, "integer_list", [1,0]),
    
    new if_block("if", undefined, [4], [new built_in_gate_block("u1", undefined, [0.6], [0])]),
    new if_block("if", undefined, [3], [new built_in_gate_block("cu3", undefined, [new var_ref_block("lst_var_angles")], [new var_ref_block("lst_var", undefined)])]),
    new measurement_block("", undefined, [0, 1, 2]),
    new measurement_block("", undefined, [] , true),

    var_assgn,
    new built_in_gate_block("ch", undefined, [], [new var_ref_block("b", undefined), 1]),
    new loop_block("hadamard loop", undefined, 2, [had_block, var_assgn2, had_block2]),  

    cust_func,
    new custom_function_ref("cust", undefined, undefined, undefined),
    new n_bit_controlled_gate("", undefined, [1, 2], [0, 3], 5, "cx")
    );

var beginning_blocks = JSON.stringify(blocks, null, ' ');


var circuit = new QuantumCircuit;
var num_qubits = 6;

var start = performance.now();
var qasm = generate_QASM(blocks, num_qubits).reduce((previous_string, current_string) => previous_string + current_string[0]);
var end = performance.now();

console.log(`time taken is ${end - start} ms`);

var end_blocks = JSON.stringify(blocks, null, ' ');

if(beginning_blocks != end_blocks)
{
    console.log("beginning blocks");
    console.log(beginning_blocks);
    console.log("end blocks");
    console.log(end_blocks);
} else
{
    console.log("hooray, beginning blocks is identical to ending blocks");
    // console.log(beginning_blocks);
}

console.log(qasm);
circuit.importQASM(qasm, function(errors) {
    console.log(errors);
});

circuit.run();

console.log(circuit.exportToQASM());

var test_circuit = new QuantumCircuit;
//test_circuit.addGate("x", 0, 0);
test_circuit.run([1, 0]);
console.log(test_circuit.stateAsArray());
console.log(test_circuit.exportToQASM());

// var start_time = performance.now();
// console.log(circuit.stateAsSimpleArray());
// var end_time = performance.now();
// console.log(`it took ${end_time - start_time}ms to get circuit state as simple array with ${num_qubits} qubits`);

// var start_time = performance.now();
// console.log(circuit.stateAsArray(true));
// console.log(circuit.stateAsArray());
// var end_time = performance.now();
// console.log(`it took ${end_time - start_time}ms to get circuit state as array(true) and state as array with ${num_qubits} qubits`);

// var start_time = performance.now();
// console.log(circuit.stateAsString(true));
// var end_time = performance.now();
// console.log(`it took ${end_time - start_time}ms to get circuit state as string with ${num_qubits} qubits`);

// console.log(circuit.probabilities());

// var start_time = performance.now();
// circuit.run();
// var end_time = performance.now();
// console.log(`it took ${end_time - start_time}ms to run this with ${num_qubits} qubits`);
// //console.log(circuit.stateAsString(false));
// console.log(circuit.probabilities());


//var testarray = [];

//console.log(Object.entries(built_in_gates));
/*Object.entries(built_in_gates).forEach(([key, value]) =>
    {
        console.log(key + " key");
        console.log(value + " value");
        console.log(built_in_gates[key] + " built_in_gates[key]");
        //console.log(key + "key is this\n");
        //console.log(value.QASM_symbol + "qasm is this\n");
        if(key == value.QASM_symbol)
        {
            
        } else
        {
            testarray.push(built_in_gates[key]);
        }
    }

)*/

//console.log(testarray);

// function get_magnitude(circuit)
// {
//     return Math.sqrt(circuit.real_component + circuit.imaginary_component);
// }

// //phase in radians
// function get_phase()
// {
//     console.log(Math.acos(0.707));
//     console.log(Math.cos(Math.acos(0.707)));
//     /*real = circuit.real_component;
//     i = circuit.imaginary_component;
//     mag = get_magnitude(circuit);

//     real/i = cos(theta);
//     theta = inverse_cos(real/i);*/

// }

//get_phase();

function get_phase_and_magnitude()
{
    let state = circuit.stateAsArray(true).map((qubit_state) => {
        return {vector: qubit_state.indexBinStr, ...qubit_state.amplitude.toPolar()}
    });

    return state;
}

console.log(get_phase_and_magnitude());
