import Func from "../app/Func2";

const { getWinner } = Func()

describe('Pruebas de elegir ganador', () => {
    test("Tijeras vs. Papel - Debe ganar el jugador", () => {
        // Given
        var Eleccion_Jugador = 'tijeras';
        var Eleccion_Bot = 'papel';

        // When
        var expectedOutput = 'Ganaste';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Tijeras vs. Piedra - Debe perder el jugador", () => {
        // Given
        var Eleccion_Jugador = 'tijeras';
        var Eleccion_Bot = 'piedra';

        // When
        var expectedOutput = 'Perdiste';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Tijeras vs. Tijeras - Debe ser un empate", () => {
        // Given
        var Eleccion_Jugador = 'tijeras';
        var Eleccion_Bot = 'tijeras';

        // When
        var expectedOutput = 'Empate';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Piedra vs. Papel - Debe perder el jugador", () => {
        // Given
        var Eleccion_Jugador = 'piedra';
        var Eleccion_Bot = 'papel';

        // When
        var expectedOutput = 'Perdiste';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Piedra vs. Tijeras - Debe ganar el jugador", () => {
        // Given
        var Eleccion_Jugador = 'piedra';
        var Eleccion_Bot = 'tijeras';

        // When
        var expectedOutput = 'Ganaste';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Piedra vs. Piedra - Debe ser un empate", () => {
        // Given
        var Eleccion_Jugador = 'piedra';
        var Eleccion_Bot = 'piedra';

        // When
        var expectedOutput = 'Empate';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Papel vs. Piedra - Debe ganar el jugador", () => {
        // Given
        var Eleccion_Jugador = 'papel';
        var Eleccion_Bot = 'piedra';

        // When
        var expectedOutput = 'Ganaste';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Papel vs. Tijeras - Debe perder el jugador", () => {
        // Given
        var Eleccion_Jugador = 'papel';
        var Eleccion_Bot = 'tijeras';

        // When
        var expectedOutput = 'Perdiste';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });

    test("Papel vs. Papel - Debe ser un empate", () => {
        // Given
        var Eleccion_Jugador = 'papel';
        var Eleccion_Bot = 'papel';

        // When
        var expectedOutput = 'Empate';
        var actualOutput = getWinner(Eleccion_Jugador, Eleccion_Bot);

        // Then
        expect(expectedOutput).toBe(actualOutput);
    });
});