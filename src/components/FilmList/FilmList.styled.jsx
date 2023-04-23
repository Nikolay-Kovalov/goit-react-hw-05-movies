import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  padding-bottom: 24px;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  list-style: none;
  max-width: 240px;
  background-color: #FA7800;
  

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


`;

export const Image = styled.img`
width: 240px;
height: 360px;

::hover {
  cursor: pointer;

}
`
