export const ComponentsCard = () => (
  <div
    className='relative overflow-hidden rounded-lg border bg-background p-2'
    data-aos='flip-right'
    data-aos-duration='1500'
  >
    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
      <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
        <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
      </svg>
      <div className='space-y-2'>
        <h3 className='font-bold'>Components</h3>
        <p className='text-sm text-muted-foreground'>
          UI components built using Shadcn and styled with Tailwind CSS.
        </p>
      </div>
    </div>
  </div>
);
