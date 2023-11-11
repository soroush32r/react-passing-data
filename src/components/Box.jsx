import clsx from 'clsx'

export const Box = ({color}) => {
  return (
    <div className={clsx('w-36 h-36 border-teal-900 border',
      {'bg-red-500' : color === 'Red'},
      {'bg-yellow-500' : color === 'Yellow'},
      {'bg-green-500' : color === 'Green'},
      {'bg-pink-500' : color === 'Pink'}
    )}>
      
    </div>
  )
}