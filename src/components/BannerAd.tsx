import { Box } from '@mui/material'
import { styled } from '@mui/system'

export function BannerAd() {
    const StyledBannerAd = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '24px', 
        borderRadius: '8px', 
        overflow: 'hidden',       })
    return (
        <StyledBannerAd>
        <img
          src="/VESTIBULAR.gif"
          alt="Banner do Vestibular"
          style={{ width: '100%', height: '300px', borderRadius: '8px' }}
        />
      </StyledBannerAd>
    )
}
