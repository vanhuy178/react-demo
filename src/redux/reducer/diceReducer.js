const initialState = {
    dice: true, // true tài từ 3-11 điểm,  false còn xỉu từ 12 điểm trở lên
    listDice:
        [
            { id: 1, picture: './img/1.png' },
            { id: 1, picture: './img/1.png' },
            { id: 1, picture: './img/1.png' }
        ],
    totalWining: 0,
    totalPlaying: 0
}

const diceReducer = ((state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case 'BET':
            state.dice = action.payload;
            return { ...state }
        case 'PLAYING_GAME':
            // tạo mảng húng đối tượng random
            let listRandomDice = [];

            for (let i = 0, length = state.listDice.length; i < length; i++) {
                // tạo số ngẫu nhiên
                let randomNumber = Math.floor(Math.random() * 6) + 1;

                let diceRandomValue = { id: `${randomNumber}`, picture: `./img/${randomNumber}.png ` }
                listRandomDice.push(diceRandomValue)
            }
            state.listDice = listRandomDice;
            // số lượt chơi
            state.totalPlaying += 1;

            // tính tổng điểm thắng
            let totalRandomScore = listRandomDice.reduce((total, itemDice) => {
                return total += Number(itemDice.id)
            }, 0)

            // xử lý win gammimg
            console.log(totalRandomScore);
            if ((totalRandomScore > 11 && state.dice === true) || (totalRandomScore <= 11 && state.dice === false)) {
                state.totalWining += 1
            }

            // tính số làn thắng
            return {
                ...state
            }
        default:
            return { ...state }
    }
})

export default diceReducer;