import { useReducer, useCallback } from 'react';

// Definir las acciones para el reducer
const NEXT_TURNO = 'NEXT_TURNO';
const SET_TOTAL_JUGADORES = 'SET_TOTAL_JUGADORES';

interface GameState {
  turnoJugador: number;
  totalJugadores: number;
}

type GameAction =
  | { type: typeof NEXT_TURNO }
  | { type: typeof SET_TOTAL_JUGADORES; payload: number };

// Estado inicial
const initialState: GameState = {
  turnoJugador: 1, // Turno inicial en 1
  totalJugadores: 4,
};

// Reducer para manejar los turnos
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case NEXT_TURNO:
      const nuevoTurno = (state.turnoJugador % state.totalJugadores) + 1;
      return {
        ...state,
        turnoJugador: nuevoTurno,
      };
    case SET_TOTAL_JUGADORES:
      return {
        ...state,
        totalJugadores: action.payload,
      };
    default:
      return state;
  }
}

// Hook de uso del turno
export function useGameTurn(initialTurno: number, totalPlayers: number) {
  const [state, dispatch] = useReducer(gameReducer, {
    ...initialState,
    turnoJugador: initialTurno, // Asignación inicial del turno
    totalJugadores: totalPlayers, // Asignación inicial de total de jugadores
  });

  const nextTurno = useCallback(() => {
    dispatch({ type: NEXT_TURNO });
  }, [state.turnoJugador]); // Dependemos de turnoJugador para actualizar correctamente

  const setTotalJugadores = useCallback((num: number) => {
    dispatch({ type: SET_TOTAL_JUGADORES, payload: num });
  }, []);

  // Nuevo valor: Turno que se retornará en lugar de "turnoJugador"
  const turnoJugadorRetornado = state.turnoJugador;

  return {
    turnoJugadorRetornado, // Retornamos el turno actualizado
    totalJugadores: state.totalJugadores,
    nextTurno,
    setTotalJugadores,
  };
}
