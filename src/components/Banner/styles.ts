import styled from 'styled-components'

export const RestaurantBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  width: 100%;
  color: #fff;
  font-size: 32px;
  line-height: 37.5px;

  h2 {
    font-weight: 900;
    font-size: 32px;
    margin: 0px;
  }

  h3 {
    font-size: 30px;
    font-weight: 100;
    margin: 0;
  }
`
export const Infos = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  max-width: 1055px;
  margin: 0 auto;
  height: 280px;
  padding: 24px;
  gap: 140px;

  h2 {
    font-weight: 900;
    font-size: 32px;
    margin: 0px;
  }

  h3 {
    font-size: 30px;
    font-weight: 100;
    margin: 0;
  }
`
