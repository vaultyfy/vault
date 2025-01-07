import { FinancialGoals } from "./financial-goals"
import { FlexibleContributions } from "./flexible-contributions"
import { Hero } from "./hero"
import { SystemMatching } from "./system-matching"

export const Home = () => {
  return (
    <>
      <FinancialGoals />
      <FlexibleContributions />
      <SystemMatching />
    </>
  )
}
