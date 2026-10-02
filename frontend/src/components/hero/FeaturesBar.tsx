import financeIcon from '../../assets/icons/finance.svg';
import barIcon from '../../assets/icons/bar.svg';
import bulbIcon from '../../assets/icons/bulb.svg';
import dashIcon from '../../assets/icons/dash.svg';

interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const FEATURES: FeatureCardProps[] = [
  {
    icon: financeIcon,
    title: 'Finance',
    subtitle: 'Financial Performance',
  },
  {
    icon: barIcon,
    title: 'Data',
    subtitle: 'Business Analytics',
  },
  {
    icon: bulbIcon,
    title: 'Intelligence',
    subtitle: 'Decision Support',
  },
  {
    icon: dashIcon,
    title: 'Dashboards',
    subtitle: 'Live Business Visibility',
  },
];

export function FeaturesBar() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/60 mt-12 sm:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {FEATURES.map((item, idx) => (
          <div
            key={item.title}
            className={`flex items-center gap-4 ${
              idx !== 0 ? 'lg:border-l lg:border-slate-100 lg:pl-6' : ''
            }`}
          >
            {/* Circular Blue Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-[#EBF3FC] flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105">
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col">
              <h3 className="font-headline font-bold text-base text-[#0B192C]">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
