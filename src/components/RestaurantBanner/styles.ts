import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ImagemBg = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`
export const BannerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  p {
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
    color: ${colors.pink};
    cursor: pointer;
  }
`
export const BannerInfo = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${colors.pink};
`

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const BlackLayer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 24px;
  padding-bottom: 32px;
`

export const Tags = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};

  h4 {
    font-weight: 100;
  }
`

export const Banner = styled.div`
  height: 440px;
  margin-bottom: 56px;
`
