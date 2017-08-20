import pays1 from '../../../assets/paytables/pays1.png';
import pays2 from '../../../assets/paytables/pays2.png';
import pays3 from '../../../assets/paytables/pays3.png';

export default function reducer(state={
        show: false,
        paytablePositonIndex: 0,
        immediateTransition: true,
        interactable: false,
        paytables: [

            {
                label: "paytable1",
                backgroundPath: pays1,
                renderSlide: true,
            },
            {
                label: "paytable2",
                backgroundPath: pays2,
                renderSlide: true,
            },
            {
                label: "paytable3",
                backgroundPath: pays3,
                renderSlide: true,
            }

        ]
    }, action) {

        switch (action.type) {
            case 'TOGGLE_PAYTABLE_SCENE_VISIBLE':{
                return {
                    ...state,
                    show: action.payload,
                }
            }
            case 'OPEN_PAYTABLE_SCENE':{
                return {
                    ...state,
                    show: action.payload,
                    immediateTransition: true,
                    paytablePositonIndex: 0,
                    paytables: state.paytables.map((paytable, index)=>{
                        return {
                            ...paytable,
                            renderSlide: index == 0 ? true : false
                        }
                    })
                }
            }
            case 'PAYTABLE_SUCCESSFULLY_OPENED':{
                return {
                    ...state,
                    immediateTransition: false,
                    interactable: true,
                    paytables: state.paytables.map((paytable, index)=>{
                        return {
                            ...paytable,
                            renderSlide: true
                        }
                    })
                }
            }
            case 'CLOSE_PAYTABLE_SCENE':{
                return {
                    ...state,
                    show: action.payload,
                    immediateTransition: true,
                    interactable: false,
                    paytables: state.paytables.map((paytable, index)=>{
                        return {
                            ...paytable,
                            renderSlide: index == state.paytablePositonIndex ? true : false
                        }
                    })
                }
            }
            case 'SET_PAYTABLE_POSITION_INDEX':{
                return {
                    ...state,
                    paytablePositonIndex: action.payload,
                }
            }
        }

        return state
}
