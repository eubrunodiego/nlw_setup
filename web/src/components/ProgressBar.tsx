import * as Progress from '@radix-ui/react-progress';
interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps){
  /*
  return (
    <Progress.Root 
      className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
      role="progressbar"
      aria-label="Progresso diário dos hábitos"
      aria-valuenow={props.progress}
    >
      <Progress.Indicator
      className="h-3 rounded-xl bg-violet-600 transition transform ease-in-out hover:bg-violet-500"
      style={{ width: `${props.progress}%` }}
      />
    </Progress.Root>
  )
  */
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso diário dos hábitos"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 transition-all duration-700"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
  
}