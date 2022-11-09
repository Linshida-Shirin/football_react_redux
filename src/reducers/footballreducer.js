import { actionTypes } from "../actions/actionTypes";


const initialState = {
  teams: [
    { id:1,
      name:"Liverpool F.C",
      photo:"https://www.bing.com/th?id=AMMS_6232d25e58baa6fce247692b116de51d&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]
      },
      { id:2,
      name:"Real Madrid",
      photo:"https://www.bing.com/th?id=AMMS_e047622fedece8300b5e9063b424003e&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:3,
      name:"Manchester United",
      photo:"https://www.bing.com/th?id=AMMS_2a2573717a48ee9d74ade45ff64e8a65&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:4,
      name:"FC Barcelona",
      photo:"https://www.bing.com/th?id=AMMS_693304dcbf0c39a492bc864440d33ad2&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:5,
      name:"Chelsea F.C",
      photo:"https://www.bing.com/th?id=AMMS_2557ff1080cb8ce94638eaaf0f3f45be&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:6,
      name:"Paris Saint-Germain",
      photo:"https://www.bing.com/th?id=AMMS_40b22dcf494f22a80163e777bf43e22f&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:7,
      name:"Arsenal",
      photo:"https://www.bing.com/th?id=AMMS_a17e54851f6897aba45904cd26f1aa2a&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:8,
      name:"Manchester City F.C",
      photo:"https://www.bing.com/th?id=AMMS_6ce1fef7e237240137126b353d3bd73e&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
     { id:9,
      name:"AC Milan",
      photo:"https://www.bing.com/th?id=AMMS_b61b982a3735ed6c492d1f1169fbcbe0&w=115&h=115&c=5&o=6&dpr=1.25&pid=3.1",
      players:[]  
     },
    
  ],
  playerList: [
    {
      id:1,
      name:"Neymar Jr",
      details:"Neymar da Silva Santos Júnior, known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team",
      position:"Forwards",
      photo:"https://i.pinimg.com/originals/46/09/81/4609815e9587f61cb7a43b24dc367514.jpg",
      available: true
  },
  {
      id:2,
      name:"Philippe Coutinho",
      details:"Philippe Coutinho Correia is a Brazilian professional footballer ....................who plays as an attacking midfielder or winger for Premier League club Aston Villa..................................",
      position:"Midfielder",
      photo:"https://i.pinimg.com/736x/f0/9b/fa/f09bfa266e871030d3cd81bca6fb4320--philippe-coutinho-soccer.jpg",
      available: true
  },
  {
      id:3,
      name:"Kevin De Bruyne",
      details:"Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder for Premier League club Manchester City and the Belgium national team.................................",
      position:"Midfielder",
      photo:"https://i.pinimg.com/originals/60/11/59/6011590206e87b24707c6907e155c001.jpg",
      available: true
  },
  {
      id:4,
      name:"Harry Edward Kane",
      details:"Harry Edward Kane MBE is an English professional footballer who plays as a striker for Premier League club Tottenham Hotspur and captains the England national team.",
      position:"Midfielder",
      photo:"https://th.bing.com/th/id/OIP.Bz3RLJsluOJhpmqlKKB9igAAAA?pid=ImgDet&rs=1",
      available: true
  },
  {
      id:5,
      name:"Mohamed Salah",
      details:"Mohamed Salah is an Egyptian professional footballer who plays as a forward for Premier League club Liverpool and captains...........................",
      position:"Midfielder",
      photo:"https://i.pinimg.com/originals/45/fc/1f/45fc1fc94c2f1f91e95b135d0cb96389.jpg",
      available: true
  },
  {
      id:6,
      name:"Kylian Mbappé",
      details:"Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the France national tea",
      position:"Midfielder",
      photo:"https://staticc.sportskeeda.com/editor/2022/09/59184-16639376687989-1920.jpg",
      available: true
  },
  {
      id:7,
      name:"Ángel Di María",
      details:"Di María is an Argentine professional footballer who plays for Ligue 1 club Paris Saint-Germain and the Argentina national team.",
      position:"Midfielder",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMlbrlPxsX9hPBgLoDjufO3eWG9pVqyaUZNTKhyl3qYR-jGukvNGav-3xvIZv5ta5gF0&usqp=CAU",
      available: true
  },
  {
      id:8,
      name:"Mauro Icardi",
      details:"Mauro Emanuel Icardi is an Argentine professional footballer who plays as a striker for Ligue 1 club Paris Saint-Germain ..................................",
      position:"Midfielder",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylRIv03oxVBkjYjqybTLl-Jaj9Sm2R6p5qc3ZYPJ9HHJ_M13E9dWfmQ7HBh4Q4DSM_AM&usqp=CAU",
      available: true
  },
  {
      id:9,
      name:"Mesut Özil",
      details:"Mesut Özil is a German professional footballer...................................... who plays as an attacking midfielder and is the captain of Turkish Süper Lig club Fenerbahçe.",
      position:"Midfielder",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQfn83ZO9wobRJA0_ANFLASvRXv--_za_Y4k1q0kNh50NjNMc3IV1nTI8kmFYC8mMANU&usqp=CAU",
      available: true
  },
  {
      id:10,
      name:"Paulo Dybala",
      details:"Paulo Exequiel Dybala is an Argentine professional footballer ................who plays as a forward for Serie A club Juventus and the Argentina national team................................",
      position:"Midfielder",
      photo:"https://i.pinimg.com/736x/94/7e/23/947e235cd7b275fd7ffb8d3881f58798.jpg",
      available: true
  },
  {
      id:11,
      name:"Cristiano Ronaldo",
      details:"Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester..................................",
      position:"Midfielder",
      photo:"https://b.fssta.com/uploads/application/soccer/headshots/885.png",
      available: true
  },
  {
      id:12,
      name:"Lionel Messi",
      details:"Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team",
      position:"Midfielder",
      photo:"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
      available: true
  }
  ],
};
export const teamReducer = (state = initialState, action) => {
  console.log("reached reducer");
  switch (action.type) {
    case actionTypes.ADD_TEAM:
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };

      case actionTypes.REMOVE_TEAM:
        return {
            ...state,
            teams:state.teams.filter(item=>item.id !== action.payload)
        }
        break;

      case actionTypes.REMOVE_PLAYER:
                return {
                    ...state,
                    playerList:state.playerList.filter(player=>player.id !== action.payload)
                    }
                break;


    case actionTypes.ADD_PLAYER_TO_TEAM:
      // console.log("payload reducer add", action.payload);

      const stateCopy = { ...state };

      const team = stateCopy.teams.find((t) => t.name == action.payload.teamName);

      if (team) {
        let playerAlreadyAdded = false;
        stateCopy.teams.forEach((t) => {
          const existingPlayerWithSameId = t.players.find((p) => p.id == action.payload.playerId
          );
          if (existingPlayerWithSameId) {
            playerAlreadyAdded = true;
          }
        });

        if (playerAlreadyAdded == false) {
          team.players.push(action.payload.player);
          const playerFromPList = stateCopy?.playerList?.find((p) => p.id === action.payload.player.id
          );
          if (playerFromPList) {
            playerFromPList.available = false;
          }
          return stateCopy;
        }
      }

      return stateCopy;

      case actionTypes.REMOVE_PLAYER_FROM_TEAM:
        const stateClone = { ...state };
        const teams=[...state.teams]
        const playerList=[...state.playerList]
        const teamObj = teams.find((t) => t.id == action.payload.teamId
        );
        console.log("reducr teamId:", action.payload);
  
        teamObj.players = teamObj?.players?.filter((p) => p.id !== action.payload.playerId
        );
        
        const deletedPlayer=playerList.find((player)=>player.id==action.payload.playerId)
        deletedPlayer.available=true;
        console.log("stateClone", stateClone.playerList);
        return {
          ...state,
          teams:teams,
          playerList:playerList
        };
  

    default:
      return state;
      break;
  }
};
