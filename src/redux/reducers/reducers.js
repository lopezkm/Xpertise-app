import Proyects from '../../mockData/proyectsInProgress.js';
import Finished from '../../mockData/proyectsFinished.js';
import Registered from '../../mockData/registered.js';
import { NEW_REGISTERED, ID_LOGUED, DELETE_USER, NEW_PROYECT, FINISHED_PROYECT } from '../actionsNames.js';


const initialState = {
  onGoing: Proyects,
  finished: Finished,
  registered: Registered,
  id:""
}

function Reducer(state = initialState, action) {
  switch ( action.type )
	{
		case NEW_REGISTERED:
		
			return {
				...state,
				registered: [ ...state.registered, action.payload ]
			};
		
		case NEW_PROYECT:
			
			return {
				...state,
				onGoing: [ ...state.onGoing, action.payload ]
			}
		
		case ID_LOGUED:
			
			return {
				...state,
				id: action.payload
			}

		case FINISHED_PROYECT:
			
			return {
				...state,
				onGoing: state.onGoing.filter(proyect => proyect.id !== action.payload.id),
				finished: [ ...state.finished, action.payload]
			}
    
		case DELETE_USER:
		
			return {
				...state,
				registered: state.registered.filter(user => user.id !== action.payload)
			}
       
		default:
			
			return state;
	}
} 
export default Reducer;