import { motion } from "framer-motion";
import CountUp from "../../../component/CountUp";
import { useInView } from "react-intersection-observer";

const ImpactCard = ({
    icon: Icon,
    number,
    suffix,
    title,
    description,
    index,
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            className="w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
        >
            {/* Top Right Decorative Shimmer Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#0B1F3A] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300 shadow-md">
                    <Icon className="text-[#D4AF37] group-hover:text-[#0B1F3A] transition-colors duration-300" size={26} />
                </div>

                {/* Animated Stat Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight flex items-center">
                    {inView && (
                        <CountUp
                            from={0}
                            to={number}
                            separator=","
                            direction="up"
                            duration={1.5}
                            className="count-up-text"
                            delay={0}
                        />
                    )}
                    <span className="text-[#D4AF37] ml-0.5">{suffix}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-lg sm:text-xl font-bold text-[#0B1F3A]">
                    {title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Bottom Gold Accent Bar */}
            <div className="w-full h-[2px] bg-slate-100 group-hover:bg-[#D4AF37] transition-colors duration-300 mt-6 rounded-full" />
        </motion.div>
    );
};

export default ImpactCard;