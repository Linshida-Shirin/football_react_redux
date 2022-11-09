import { actionTypes } from "./actionTypes";



export const addTeam = (teamData) => {
  // console.log("teamAcction",teamData)
  return {
    type: actionTypes.ADD_TEAM,
    payload: teamData,
  };
};
export const removeTeam =(selectedTeamId)=> {
  return {
      type:actionTypes.REMOVE_TEAM,
      payload:selectedTeamId
  }
}

export const addPlayerToTeam = (teamName, player) => {
  console.log("payload", teamName, player);
  return {
    type: actionTypes.ADD_PLAYER_TO_TEAM,
    payload: { teamName, player },
  };
};

export const removePlayerFromTeam = (teamId, playerId) => {
  return {
    type: actionTypes.REMOVE_PLAYER_FROM_TEAM,
    payload: { teamId, playerId },
  };
};

export const addPlayer = () => {
  return {
    type: actionTypes.ADD_PLAYER,
  };
};

export const removePlayer =(playerId)=> { 
  return {
      type:actionTypes.REMOVE_PLAYER,
      payload:playerId
  }
}
