
/*
* Acest fișier conține funcția combineReducers importată din redux, care este folosită pentru a combina reducer-ii specifici ai aplicației. Această funcție primește un obiect ce reprezintă fiecare reducer și returnează un singur reducer care combină toate reducer-ii specifici ai aplicației.

În acest fișier, combineReducers este folosit pentru a combina reducer-ii userReducer, authenticationReducer și dataReducer, care se ocupă de starea utilizatorului, autentificare și datele utilizatorilor, respectiv. Obiectul returnat de combineReducers conține trei proprietăți, user, authentication și data, fiecare dintre aceste proprietăți fiind asociată cu reducer-ul specific al aplicației.
* */

import { combineReducers } from "redux";
import userReducer from "./user";
import authenticationReducer from "./authentication";
import dataReducer from "./data";
export default combineReducers({
  user: userReducer,
  authentication: authenticationReducer,
  data: dataReducer,
});
