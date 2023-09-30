"use client";

import { useState } from "react";

const Conclusiones = () => {
  const [collapseValue1, setCollapseValue1] = useState(false);
  const [collapseValue2, setCollapseValue2] = useState(false);
  const [collapseValue3, setCollapseValue3] = useState(false);
  const [collapseValue4, setCollapseValue4] = useState(false);

  function handleCollapse1() {
    setCollapseValue1(true);
    setCollapseValue2(false);
    setCollapseValue3(false);
    setCollapseValue4(false);
    setCollapseValue4(false);
  }
  function handleCollapse2() {
    setCollapseValue1(false);
    setCollapseValue2(true);
    setCollapseValue3(false);
  }
  function handleCollapse3() {
    setCollapseValue1(false);
    setCollapseValue2(false);
    setCollapseValue3(true);
    setCollapseValue4(false);
  }
  function handleCollapse4() {
    setCollapseValue1(false);
    setCollapseValue2(false);
    setCollapseValue3(false);
    setCollapseValue4(true);
  }
  function handleCollapseALL() {
    setCollapseValue1(false);
    setCollapseValue2(false);
    setCollapseValue3(false);
    setCollapseValue4(false);
  }

  return (
    <div className="container mt-4">
      <h1>Refleciones de Temas Vistos</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={
                  collapseValue1 == true ? handleCollapseALL : handleCollapse1
                }
              >
                Nodemailer
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className={collapseValue1 == true ? "collapse show" : "collapse"}
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <p>
                Reflexión de 100 palabras sobre el código y funcion
                CreateTransport
              </p>
              <p>
                La lógica de este código se centra en el envío de correos
                electrónicos utilizando Nodemailer y la generación dinámica del
                contenido del correo electrónico utilizando Handlebars. Este
                código Node.js muestra una aplicación de envío de correos
                electrónicos. Utiliza la biblioteca Nodemailer para establecer
                una conexión con un servidor de correo saliente de Outlook y
                enviar correos electrónicos. La función createTransport de
                Nodemailer se utiliza para configurar el transporte SMTP,
                proporcionando información de autenticación, como el correo
                electrónico y la contraseña del remitente. La plantilla de
                correo electrónico se carga desde un archivo Handlebars,
                permitiendo la personalización del contenido. Luego, el servidor
                acepta solicitudes POST para enviar correos electrónicos con
                datos y opciones específicos proporcionados en el cuerpo de la
                solicitud. La función main envía el correo electrónico con las
                opciones proporcionadas. En resumen, este código facilita el
                envío de correos electrónicos personalizados utilizando Node.js
                y Nodemailer.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                onClick={
                  collapseValue2 == true ? handleCollapseALL : handleCollapse2
                }
              >
                Código QR de Strings
              </button>
            </h5>
          </div>

          <div
            id="collapseTwo"
            className={collapseValue2 == true ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              <h5>Las principales ventajas de usar códigos QR incluyen:</h5>
              <ol>
                <li>
                  Facilidad de Uso: Los códigos QR son fáciles de escanear con
                  la mayoría de los teléfonos inteligentes modernos. No se
                  necesita una aplicación adicional; la mayoría de las cámaras
                  de los teléfonos pueden leerlos directamente.
                </li>
                <li>
                  Capacidad de Almacenamiento: Los códigos QR pueden contener
                  una cantidad significativa de datos, desde enlaces web y texto
                  hasta información de contacto, coordenadas geográficas o
                  incluso tarjetas de visita virtuales.
                </li>
                <li>
                  Rápido Acceso a Información: Los códigos QR permiten a los
                  usuarios acceder rápidamente a información relevante, como
                  sitios web, promociones, descuentos, menús, eventos y más,
                  simplemente escaneando el código.
                </li>
                <li>
                  Interactividad: Los códigos QR pueden utilizarse en
                  publicidad, carteles y productos para involucrar a los
                  usuarios, proporcionando información adicional o acceso a
                  contenido exclusivo.
                </li>
                <li>
                  Versatilidad: Los códigos QR se utilizan en una amplia gama de
                  aplicaciones, desde marketing y publicidad hasta rastreo de
                  inventario y boletos electrónicos.
                </li>
              </ol>
              <p>
                Reflexión de 100 palabras sobre el código para generar códigos
                qr
              </p>
              <p>
                Este código Node.js define una ruta en Express que responde a
                las solicitudes POST enviadas al servidor. Cuando recibe una
                solicitud, primero registra los datos recibidos en el cuerpo de
                la solicitud. Luego, utiliza la biblioteca QRCode para generar
                un código QR a partir de los datos proporcionados. El código QR
                resultante se convierte en una URL de datos y se envía como
                respuesta a la solicitud. Si se produce algún error durante la
                generación del código QR, se maneja y se envía una respuesta de
                error 500. En resumen, este código permite generar fácilmente
                códigos QR a partir de texto proporcionado en una solicitud
                POST.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn  collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                onClick={
                  collapseValue3 == true ? handleCollapseALL : handleCollapse3
                }
              >
                Raspador WEB
              </button>
            </h5>
          </div>

          <div
            id="collapseThree"
            className={collapseValue3 == true ? "collapse show" : "collapse"}
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              <h5>Las principales ventajas de usar Raspadores WEB incluyen:</h5>
              <ol>
                <li>
                  Recopilación Eficiente de Datos: Los raspadores web pueden
                  recopilar grandes cantidades de datos de sitios web en un
                  corto período de tiempo, lo que sería prácticamente imposible
                  de hacer manualmente.
                </li>
                <li>
                  Automatización: Los raspadores web pueden ejecutarse
                  automáticamente en intervalos programados, lo que significa
                  que puede mantenerse actualizado con la información más
                  reciente sin intervención humana constante.
                </li>
                <li>
                  Precisión: Cuando están configurados correctamente, los
                  raspadores web pueden extraer datos con una alta precisión,
                  minimizando errores humanos.
                </li>
                <li>
                  Análisis de Datos: Los datos recopilados se pueden utilizar
                  para análisis, generación de informes y toma de decisiones en
                  una variedad de industrias, desde el análisis de mercado hasta
                  la investigación competitiva.
                </li>
                <li>
                  Monitorización de Precios: Las empresas pueden utilizar
                  raspadores web para rastrear los precios de productos o
                  servicios de la competencia y ajustar sus propias estrategias
                  de precios en consecuencia.
                </li>
              </ol>
              <p>
                En resumen, las ventajas de utilizar raspadores web son la
                eficiencia en la recopilación de datos, la automatización, la
                precisión y la capacidad de obtener información valiosa para una
                amplia gama de aplicaciones en diferentes industrias, incluyendo
                el comercio electrónico, la investigación de mercado, la
                vigilancia competitiva, la toma de decisiones empresariales y
                más. Sin embargo, es importante destacar que el uso de
                raspadores web debe realizarse de manera ética y legal,
                respetando los términos de servicio de los sitios web y las
                leyes de protección de datos aplicables.
              </p>
              <p>Reflexión de 100 palabras sobre el código para raspar datos</p>
              <p>
                El código presentado en el proyecto es un ejemplo de raspado web
                utilizando tecnologías como Puppeteer, JSDOM y Cheerio en el
                entorno de Express.js. La lógica se centra en la extracción de
                datos de un sitio web específico y su posterior presentación
                como una respuesta JSON. Esto demuestra la utilidad de los
                raspadores web para automatizar la recopilación de información
                de sitios web, lo que puede ser valioso en diversas industrias.
                Sin embargo, es esencial abordar este enfoque con
                responsabilidad, respetando los términos de uso de los sitios y
                las leyes de privacidad, para garantizar una práctica ética y
                legal.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button
                className="btn  collapsed"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                onClick={
                  collapseValue4 == true ? handleCollapseALL : handleCollapse4
                }
              >
                HTML con Node
              </button>
            </h5>
          </div>

          <div
            id="collapseFour"
            className={collapseValue4 == true ? "collapse show" : "collapse"}
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              <h5>
                Las aplicaciones de chat ofrecen una serie de ventajas y se
                utilizan en una variedad de industrias por diversas razones.
                Aquí tienes algunas de las principales ventajas de utilizar
                aplicaciones de chat y ejemplos de industrias donde se aplican:
              </h5>
              <ol>
                <li>
                Comunicación Instantánea: Proporcionan una comunicación rápida y en tiempo real, lo que permite una respuesta inmediata.
                </li>
                <li>
                Accesibilidad: Están disponibles en dispositivos móviles y de escritorio, lo que facilita la comunicación en cualquier momento y lugar.
                </li>
                <li>
                Automatización: Se pueden integrar chatbots y respuestas automáticas para atender consultas comunes y tareas repetitivas.
                </li>
                <li>
                Atención al Cliente: Las empresas pueden ofrecer soporte al cliente a través de chat en vivo, resolviendo problemas de manera eficiente.
                </li>
                <li>
                Generación de Leads: Se utilizan en marketing para generar leads y mantener conversaciones con clientes potenciales.
                </li>
              </ol>
              <p>
              resumen, las aplicaciones de chat se utilizan en diversas industrias para mejorar la comunicación, brindar soporte al cliente, automatizar tareas, fomentar la colaboración y proporcionar servicios personalizados. Su versatilidad las convierte en herramientas valiosas en un amplio espectro de aplicaciones empresariales y de servicios.
              </p>
              <p>Reflexión de 100 palabras sobre el código para generar HTML con Node.Js</p>
              <p>
              El código usado para generar HTML desde el backend es una aplicación Express.js que responde a solicitudes POST en la raíz ("/"). Su lógica se centra en recibir datos del cliente, como título, texto y enlace, y utilizarlos para generar dinámicamente un fragmento HTML de respuesta. Este enfoque permite la creación de contenido personalizado en función de la entrada del usuario. Además, se garantiza que los enlaces sean válidos al agregar automáticamente "http://" si es necesario. En resumen, el código ejemplifica cómo Express.js facilita la creación de aplicaciones web dinámicas y cómo se pueden manipular los datos del cliente para generar contenido HTML de manera eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusiones;
