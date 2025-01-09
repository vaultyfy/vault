import { FinancialGoals } from "./financial-goals"
import { FlexibleContributions } from "./flexible-contributions"
import { GetMoreDone } from "./get-more-done"
import { Hero } from "./hero"
import { HowItWorks } from "./how-it-works"
import { SystemMatching } from "./system-matching"

export const Home = () => {
  return (
    <>
      <FinancialGoals />
      <FlexibleContributions />
      <SystemMatching />
      <HowItWorks />
      <GetMoreDone />
    </>
  )
}
