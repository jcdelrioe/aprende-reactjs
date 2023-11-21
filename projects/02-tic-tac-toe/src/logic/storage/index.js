export const saveGameToStorage = ({board, turn}) => {
      // guardar la partida
      window.localStorage.setItem("board", JSON.stringify(board));
      window.localStorage.setItem("turn", turn);
}

export const resetGameStorage = () => {
  // resetear el Storage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}