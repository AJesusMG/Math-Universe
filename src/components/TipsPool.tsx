// TipsPool.tsx
import React from "react";

interface TipsPoolProps {
  categories: string[];
}

const TipsPool = ({ categories }: TipsPoolProps) => {
  const generateTip = () => {
    if (categories.includes("sumas")) {
      return {
        title: "Consejo para Resolver el Ejercicio",
        body: (
          <>
            <p>
              ¡No te preocupes, aquí va un consejo para que puedas resolver este tipo de ejercicio en el universo!
            </p>
            <p>
              Si tienes que sumar estrellas como <strong>3 + 5 estrellas</strong>, intenta esto:
            </p>
            <ul className="list-disc ml-4">
              <li>Imagina que encuentras 3 estrellas en una galaxia y luego ves 5 estrellas más, ¿cuántas estrellas hay en total? <strong>3 + 5 = 8</strong>.</li>
              <li>Cuenta las estrellas en el cielo nocturno usando tus dedos o un papel para visualizarlo mejor.</li>
              <li>Piensa en cómo contar estrellas puede ayudarte a sumar, ¡es como viajar por el espacio sumando luces!</li>
            </ul>
            <p>
              <strong>Dato curioso:</strong> ¿Sabías que en nuestra galaxia, la Vía Láctea, hay más de 100 mil millones de estrellas?
            </p>
            <p>
              ¡Practica y sigue sumando como un verdadero explorador del espacio!
            </p>
          </>
        ),
      };
    } else if (categories.includes("restas")) {
        return {
          title: "Consejo para Resolver el Ejercicio",
          body: (
            <>
              <p>
                ¡Aquí tienes un consejo para convertirte en un astronauta experto en restas!
              </p>
              <p>
                Para resolver una resta como <strong>5 - 3</strong>, imagina lo siguiente:
              </p>
              <ul className="list-disc ml-4">
                <li>Imagina que tienes 5 planetas orbitando alrededor de una estrella, pero 3 de ellos se alejan en diferentes direcciones. ¿Cuántos planetas te quedan?</li>
                <li>Visualiza que tienes 5 estrellas brillando en el cielo, y de repente, 3 de ellas desaparecen en un agujero negro. ¿Cuántas estrellas siguen brillando?</li>
              </ul>
              <p>
                <strong>Dato curioso:</strong> Las estrellas "mueren" al final de su vida, un proceso fascinante que representa cómo algo puede desaparecer, ¡al igual que una resta!
              </p>
              <p>
                ¡Practica las restas y conviértete en un experto en contar estrellas que se alejan!
              </p>
            </>
          ),
        };
      } else if (categories.includes("multiplicaciones")) {
        return {
          title: "Consejo para Resolver el Ejercicio",
          body: (
            <>
              <p>
                La multiplicación es como descubrir galaxias llenas de estrellas. Aquí tienes un consejo para entenderla mejor:
              </p>
              <p>
                Si tienes que multiplicar algo como <strong>3 x 4</strong>, imagina lo siguiente:
              </p>
              <ul className="list-disc ml-4">
                <li>Imagina que tienes 3 sistemas solares, y cada uno tiene 4 planetas. ¿Cuántos planetas en total hay en todos los sistemas solares?</li>
                <li>Piensa que tienes 3 constelaciones de estrellas, y en cada constelación hay 4 estrellas brillando. ¿Cuántas estrellas hay en total en todas las constelaciones?</li>
              </ul>
              <p>
                <strong>Dato curioso:</strong> La multiplicación nos ayuda a calcular cuántas estrellas, planetas o galaxias hay cuando se agrupan, ¡es como explorar el universo con más precisión!
              </p>
              <p>
                ¡Sigue practicando la multiplicación y convierte los números en un viaje por las estrellas!
              </p>
            </>
          ),
        };
      } else if (categories.includes("divisiones")) {
        return {
          title: "Consejo para Resolver el Ejercicio",
          body: (
            <>
              <p>
                La división es como repartir estrellas en el espacio entre varios astronautas. Aquí tienes un consejo:
              </p>
              <p>
                Si tienes que resolver una división como <strong>12 ÷ 4</strong>, imagina lo siguiente:
              </p>
              <ul className="list-disc ml-4">
                <li>Imagina que tienes 12 estrellas y las tienes que repartir entre 4 astronautas. ¿Cuántas estrellas le tocarían a cada astronauta?</li>
                <li>Puedes visualizar cómo repartir 12 meteoritos entre 4 planetas, ¿cuántos meteoritos recibe cada planeta para que todos tengan la misma cantidad?</li>
              </ul>
              <p>
                <strong>Dato curioso:</strong> ¡Los astrónomos dividen recursos entre varias naves espaciales para asegurarse de que todos tengan lo que necesitan para explorar el cosmos!
              </p>
              <p>
                ¡Practica la división y conviértela en una misión para repartir los recursos del espacio de manera justa!
              </p>
            </>
          ),
        };
      } else {
      return {
        title: "Consejo General",
        body: (
          <>
            <p>
              ¡Confía en tus habilidades matemáticas! Si te sientes perdido, recuerda revisar tus cálculos y usar ejemplos visuales.
            </p>
          </>
        ),
      };
    }
  };

  const tip = generateTip();
  return tip;
};

export default TipsPool;
