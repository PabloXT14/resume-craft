import { AddResumeButton } from '../add-resume-button'
import { NewResumeDialog } from '../new-resume-dialog'
import { ResumeCard } from '../resume-card'

export const ResumesList = () => {
  return (
    <section className="flex-1 grid grid-cols-2 auto-rows-max gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:gap-5">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>

      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  )
}
