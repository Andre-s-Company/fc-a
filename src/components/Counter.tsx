interface Props {
  time: {
    total: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const Counter = ({ time }: Props) => {
  return (
    <div className="min-h-screen grid place-items-center bg-transparent">
      <div
        className="px-16 py-10 rounded-3xl text-center font-semibold text-4xl tracking-wide"
        style={{
          color: "#452103",
        }}
      >
        <div className="mb-4 ">Espera c:</div>

        {time.total > 0
          ? `${time.days} días ${time.hours}h ${time.minutes}m ${time.seconds}s`
          : "¡Llegó el momento!"}
      </div>
    </div>
  );
};
