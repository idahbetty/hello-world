const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function main() {
    const terminal = readline.createInterface({ input, output });

    try {
        while (true) {
            const x = await terminal.question("Enter x number: ");
            const y = await terminal.question("Enter y number: ");
            const sign = await terminal.question("Enter the operation (+, -, *, /):");

            let result;

            if (sign === "+") {
                result = Number(x) + Number(y);
            } else if (sign === "-") {
                result = Number(x) - Number(y);
            } else if (sign === "*") {
                result = Number(x) * Number(y);
            } else if (sign === "/") {
                if (Number(y) === 0) {
                    result = "Error: Division by zero is not allowed.";
                } else {
                    result = Number(x) / Number(y);
                }
            } else {
                result = "Error: Invalid operation.";
            }

            console.log("The result is: " + result);
        }
    } finally {
        terminal.close();
    }
}

main()