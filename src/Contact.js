/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27341.257845558262!2d72.93442008259088!3d31.063640467905262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1aee1a4035f%3A0x1e765ba5546791d9!2sSamundri%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1733304997333!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{border : 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/mnnqwbky" method="POST" className="contact-inputs">
              <input type="text" placeholder="username" name="username" required autoComplete="off" />
              <input type="email" name="Email" placeholder="Email" autoComplete="off" required/>
              <textarea name="Message" placeholder="Enter your message" cols="30" rows="10" required autoComplete="off"></textarea>
              <input type="submit" value="SEND"/>
            </form>
          </div>
        </div>
    </Wrapper>
  );
};

export default Contact;
