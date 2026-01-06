import React from 'react';
import {
    Shield, Award, Landmark, CheckCircle, Scale, Gavel,
    Users, User, Mail, Phone, MessageSquare, Globe,
    BarChart, PieChart, TrendingUp, DollarSign, Wallet, CreditCard, Activity,
    Home, Info, MapPin, Clock, BookOpen, Search, Filter, Monitor, FileText,
    Settings, Star, Zap, Layout, List, UserCheck, Download, Coffee, Heart,
    CheckCircle2, ArrowRight, Plus
} from 'lucide-react';

export const IconMap: Record<string, React.FC<any>> = {
    Shield, Award, Landmark, CheckCircle, Scale, Gavel,
    Users, User, Mail, Phone, MessageSquare, Globe,
    BarChart, PieChart, TrendingUp, DollarSign, Wallet, CreditCard, Activity,
    Home, Info, MapPin, Clock, BookOpen, Search, Filter, Monitor, FileText,
    Settings, Star, Zap, Layout, List, UserCheck, Download, Coffee, Heart,
    CheckCircle2, ArrowRight, Plus
};

interface LucideIconProps {
    name: string;
    className?: string;
    size?: number;
    fallback?: React.FC<any>;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
    name,
    className,
    size = 24,
    fallback = HelpCircle // Using a common fallback if icon not found
}) => {
    // If HelpCircle is not imported, let's add it or use a default
    const IconComponent = IconMap[name] || fallback || Shield;

    return <IconComponent className={className} size={size} />;
};

// Add HelpCircle to imports if using it as fallback
import { HelpCircle } from 'lucide-react';
IconMap['HelpCircle'] = HelpCircle;

export default LucideIcon;
