function getMiddleChar(input) {
    const midIdx = Math.floor(input.length / 2) + 1
    return (input.length % 2) ? input.substring(midIdx, 2) : input.substring(midIdx, 1)
}

module.exports = getMiddleChar