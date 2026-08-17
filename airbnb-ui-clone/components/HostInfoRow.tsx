interface HostInfoRowProps {
  name: string;
  yearsHosting: number;
}

const HostInfoRow = ({ name, yearsHosting }: HostInfoRowProps) => {
  return (
    <section className="flex items-center gap-4 border-b border-gray-200 py-6" aria-label="Host information">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 font-semibold text-gray-600" aria-hidden="true">
        {name.charAt(0)}
      </div>
      <div>
        <h2 className="font-semibold text-gray-900">Hosted by {name}</h2>
        <p className="text-sm text-gray-500">{yearsHosting} years hosting</p>
      </div>
    </section>
  );
};

export default HostInfoRow;
