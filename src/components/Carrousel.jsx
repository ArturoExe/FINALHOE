import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

const Carrousel = () => {
  const [width, setWidth] = useState(0);

  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
  }, []);

  return (
    <motion.div className="carousel" ref={ref}>
      <motion.div
        className="carousel-inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap="grabbing"
      >
        <motion.div className="carousel-item">
          <img src="https://www.southernliving.com/thmb/bzfXhpyxOhvJZADlNkm9-U4oEhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/casual-lob-dfb51dd5936941b98f3105c83b79f1df.jpg" />
          <h3>Masaje Relajante</h3>
          <p className="service-desc">
            Nuestro servicio de masaje relajante te transportará a un estado de
            calma y serenidad, liberando las tensiones acumuladas en tu cuerpo y
            mente.
          </p>
        </motion.div>
        <motion.div className="carousel-item">
          <img src="https://i0.wp.com/houseofelegancemx.com/wp-content/uploads/2021/02/luchiana-1440701017.jpg?resize=460%2C575&ssl=1" />
          <h3>Tratamiento facial</h3>
          <p>
            Renueva tu piel y recupera su luminosidad con nuestro tratamiento
            facial revitalizante.
          </p>
        </motion.div>

        <motion.div className="carousel-item">
          <img src="https://i0.wp.com/houseofelegancemx.com/wp-content/uploads/2021/02/female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_web-e1671175746533.jpg?resize=460%2C601&ssl=1" />

          <h3>Manicura y pedicura de lujo</h3>
          <p>
            Permítenos cuidar de tus manos y pies con nuestro servicio de
            manicura y pedicura de lujo.
          </p>
        </motion.div>

        <motion.div className="carousel-item">
          <img src="https://i0.wp.com/houseofelegancemx.com/wp-content/uploads/2023/02/group-portrait-bridesmaids-with-elegant-bride-puffy-dress-standing-room-looking-camera-preparing-wedding-day-ceremony-having-positive-emotions-copy.jpg?resize=460%2C601&ssl=1" />
          <h3>Depilación con cera</h3>
          <p>
            Olvídate del vello no deseado con nuestro servicio de depilación con
            cera.
          </p>
        </motion.div>
        <motion.div className="carousel-item">
          <img src="https://www.southernliving.com/thmb/bzfXhpyxOhvJZADlNkm9-U4oEhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/casual-lob-dfb51dd5936941b98f3105c83b79f1df.jpg" />

          <h3>Tratamiento capilar reparador</h3>
          <p>
            Restaura la salud y vitalidad de tu cabello con nuestro tratamiento
            capilar reparador. Nuestros expertos analizarán las necesidades de
            tu pelo y aplicarán productos y técnicas personalizadas para
            fortalecerlo, hidratarlo y devolverle su brillo natural.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Carrousel;
