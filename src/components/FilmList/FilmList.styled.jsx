import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: center;
  padding-left: 0;
  padding-bottom: 24px;
`;

export const CardWrapper = styled.li`

  border-radius: 4px;
  list-style: none;
  max-width: 240px;
  background-color: #FA7800;
    border-radius: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px,
    inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
  overflow: hidden;
  padding-bottom: 8px; 
  

  > a {
    text-decoration: none;
  }
`;

export const FilmtName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: #F6F5F5;
  font-size: 16px;
  text-align: center;


`;

export const Image = styled.img`
width: 100%;
min-height: 360px;
object-fit: cover;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover {

  transform: scale(1.03);

}
`
