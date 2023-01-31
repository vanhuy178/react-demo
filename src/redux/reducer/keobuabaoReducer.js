const initialState = {
    listPlaceABet: [
        { id: 'keo', img: "./img/KeoBuaBao/keo.png", status: true },
        { id: 'bua', img: './img/KeoBuaBao/bua.png', status: false },
        { id: 'bao', img: './img/KeoBuaBao/bao.png', status: false }
    ],
    result: 'ready?',
    totalWining: 0,
    totalPlaying: 0,
    computer: { id: 'keo', img: './img/KeoBuaBao/keo.png' }
};

export const keobuabaoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLACE_THE_BET':
            // // reset mảng đăt cược
            let updatedTheListTheBet = [...state.listPlaceABet]
            updatedTheListTheBet = updatedTheListTheBet.map((item, index) => {
                if (item.id === action.payload) {
                    return { ...item, status: true }
                }
                return { ...item, status: false }
            })
            // state.listPlaceABet = 
            return { ...state, listPlaceABet: updatedTheListTheBet }

        case "RANDOM":
            let randomNumber = Math.floor(Math.random() * Number(state.listPlaceABet.length));
            let newRandomComputer = state.listPlaceABet[randomNumber]
            state.computer = newRandomComputer;
            // state.totalPlaying += 1
            return { ...state }

        case "END_GAME":
            let layer = state.listPlaceABet.find(item => item.status === true);
            let computer = state.computer;
            state.totalPlaying += 1
            let ban = ['bạn thắng', 'bạn thua', 'bạn hòa'];

            switch (layer.id) {
                case "keo":
                    if (computer.id === 'keo') {
                        state.result = ban[2]
                    }
                    else if (computer.id === 'bua') {
                        state.result = ban[1]
                    }
                    else {
                        state.result = ban[0]
                        state.totalWining += 1
                    }
                    return { ...state }
                case 'bua':
                    if (computer.id === 'bua') {
                        state.result = ban[2]
                    }
                    else if (computer.id === 'keo') {
                        state.result = ban[0]
                        state.totalWining += 1
                    }
                    else {
                        state.result = ban[1]
                    }
                    return { ...state }
                case 'bao':

                    if (computer.id === 'keo') {
                        state.result = ban[1]
                    }

                    else if (computer.id === 'bao') {
                        state.result = ban[2]
                    }
                    else {
                        state.result = ban[0]
                        state.totalWining += 1
                    }
                    return { ...state }
                default:
                    return { ...state, result: 'Respect!!!' }
            }

        default:
            return { ...state }
    }
}   