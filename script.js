function mapToNucleotide(twoDigits) {
    switch (twoDigits) {
        case "00":
            return "🟥";
        case "10":
            return "🟦";
        case "01":
            return "🟩";
        case "11":
            return "🟨";
        default:
            return "Invalid";
    }
}

function convertToNucleotides() {
    const input = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');
    let nucleotideString = '';

    for (let i = 0; i < input.length; i++) {
        const val = input.charCodeAt(i);
        const bin = val.toString(2).padStart(8, '0');

        for (let j = 0; j < bin.length; j += 2) {
            const twoDigits = bin.substring(j, j + 2);
            const nucleotide = mapToNucleotide(twoDigits);
            nucleotideString += nucleotide;
        }
    }
    resultElement.textContent = nucleotideString;
}

function myFunction() {
    const copyText = document.getElementById("result");
    const tooltip = document.getElementById("myTooltip");
    const textToCopy = copyText.textContent;

    // Create a temporary input element to copy the text
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Update tooltip text
    tooltip.innerHTML = "Copied: Successfully";
}

function outFunc() {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
