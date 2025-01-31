import {
  IncreaseLiquidityContextProvider,
  IncreaseLiquidityStep,
  useIncreaseLiquidityContext,
} from 'components/IncreaseLiquidity/IncreaseLiquidityContext'
import { IncreaseLiquidityReview } from 'components/IncreaseLiquidity/IncreaseLiquidityReview'
import { IncreaseLiquidityTxContextProvider } from 'components/IncreaseLiquidity/IncreaseLiquidityTxContext'
import { LiquidityModalHeader } from 'components/Liquidity/LiquidityModalHeader'
import { IncreaseLiquidityForm } from 'pages/IncreaseLiquidity/IncreaseLiquidityForm'
import { useCloseModal } from 'state/application/hooks'
import { HeightAnimator } from 'ui/src'
import { Modal } from 'uniswap/src/components/modals/Modal'
import { ModalName } from 'uniswap/src/features/telemetry/constants'
import { useTranslation } from 'uniswap/src/i18n'

function IncreaseLiquidityModalInner() {
  const { t } = useTranslation()

  const { step, setStep } = useIncreaseLiquidityContext()
  const onClose = useCloseModal(ModalName.AddLiquidity)

  if (step === IncreaseLiquidityStep.Input) {
    return (
      <Modal name={ModalName.AddLiquidity} onClose={onClose} isDismissible gap="$gap24" padding="$padding16">
        <LiquidityModalHeader title={t('common.addLiquidity')} closeModal={onClose} />
        <HeightAnimator animation="fast">
          <IncreaseLiquidityForm />
        </HeightAnimator>
      </Modal>
    )
  }

  return (
    <Modal
      name={ModalName.AddLiquidity}
      onClose={onClose}
      isDismissible
      gap="$gap12"
      paddingX="$padding8"
      paddingY="$padding12"
    >
      <LiquidityModalHeader
        title={t('common.addLiquidity')}
        closeModal={onClose}
        goBack={() => setStep(IncreaseLiquidityStep.Input)}
      />
      <HeightAnimator animation="fast">
        <IncreaseLiquidityReview onClose={onClose} />
      </HeightAnimator>
    </Modal>
  )
}

export function IncreaseLiquidityModal() {
  return (
    <IncreaseLiquidityContextProvider>
      <IncreaseLiquidityTxContextProvider>
        <IncreaseLiquidityModalInner />
      </IncreaseLiquidityTxContextProvider>
    </IncreaseLiquidityContextProvider>
  )
}
