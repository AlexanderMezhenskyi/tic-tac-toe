class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';

        this.gameFields = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameFields[rowIndex][columnIndex])  return;
        this.gameFields[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
    }

    isFinished() {
        if (this.getWinner()) return true;
        if (this.isDraw()) return true;

        return false;
    }

    getWinner() {
        let topFields = this.gameFields[0].join('');
        let bottomFields = this.gameFields[2].join('');
        let leftFields = this.gameFields.map(item => item.filter((key, i) => i === 0)).join('');
        let rightFields = this.gameFields.map(item => item.filter((key, i) => i === 2)).join('');
        let verticalFields = this.gameFields.map(item => item[1]).join('');
        let horizontalFields = this.gameFields[1].join('');
        let leftDiagonal = this.gameFields[0][0] + this.gameFields[1][1] + this.gameFields[2][2];
        let rightDiagonal = this.gameFields[0][2] + this.gameFields[1][1] + this.gameFields[2][0];

        let fields = [topFields, bottomFields, leftFields, rightFields, verticalFields, horizontalFields, leftDiagonal, rightDiagonal];

        let winner = fields.filter(item => /ooo|xxx/.test(item)).join('');

        return winner[0] || null;
    }

    noMoreTurns() {
        let fields = this.gameFields.reduce((prev, cur) => prev.concat(cur)).join('');
        return !(/0/.test(fields));
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameFields[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
