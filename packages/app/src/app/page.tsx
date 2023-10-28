import { Button } from '@/components/ui/button'
import { SITE_DESCRIPTION } from '@/utils/site'

export default function Home() {
  return (
    <>
      <p>{SITE_DESCRIPTION}</p>
      <Button>Click me</Button>
    </>
  )
}
