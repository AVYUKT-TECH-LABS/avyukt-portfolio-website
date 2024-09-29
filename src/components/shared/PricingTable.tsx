'use client'
import { useState } from 'react'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

interface Package {
    name: string,
    price: number,
    color: string,
    features: Record<string, any>
}

interface PricingTableProps {
    packages: Package[]
}

export default function PricingTable({ packages }: PricingTableProps) {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-2 bg-gray-100 border">Packages</th>
                            {packages.map((pkg) => (
                                <th key={pkg.name} className={`p-2 text-white ${pkg.color} border capitalize`}>
                                    {pkg.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 bg-gray-100 border font-semibold">Price</td>
                            {packages.map((pkg) => (
                                <td key={pkg.name} className={`p-2 text-center text-white ${pkg.color} border font-bold`}>
                                    ₹{pkg.price}/-
                                </td>
                            ))}
                        </tr>
                        {Object.keys(packages[0].features).map((feature) => (
                            <tr key={feature}>
                                <td className="p-2 bg-gray-100 border capitalize">{feature.replace(/([A-Z])/g, ' $1').trim()}</td>
                                {packages.map((pkg) => (
                                    <td key={pkg.name} className="p-2 text-center border">
                                        {typeof pkg.features[feature] === 'boolean' ? (
                                            pkg.features[feature] ? (
                                                <Check className="inline-block text-green-500" />
                                            ) : (
                                                <X className="inline-block text-red-500" />
                                            )
                                        ) : (
                                            pkg.features[feature]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* <tr>
                            <td className="p-2 bg-gray-100 border">Extra Pages</td>
                            {packages.map((pkg) => (
                                <td key={pkg.name} className="p-2 text-center border">
                                    Rs.499/page
                                </td>
                            ))}
                        </tr> */}
                        <tr>
                            <td className="p-2 bg-gray-100 border"></td>
                            {packages.map((pkg) => (
                                <td key={pkg.name} className="p-2 text-center border">
                                    <Link
                                        key={pkg.name}
                                        href="get-quote"
                                        className={`px-4 py-2 rounded text-white ${pkg.color} hover:opacity-90 transition-opacity`}
                                    >
                                        Get Quote for {pkg.name}
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            {selectedPackage && (
                <div className="mt-8 p-4 bg-gray-100 rounded">
                    <h2 className="text-xl font-semibold mb-2">
                        You selected the {selectedPackage} package
                    </h2>
                    <p>Our team will contact you shortly with a detailed quote.</p>
                </div>
            )}
            <p className="mt-4 text-sm text-gray-500 text-center">*Terms & Conditions Apply</p>
        </div>
    )
}