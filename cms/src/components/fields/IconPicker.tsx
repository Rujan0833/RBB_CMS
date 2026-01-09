'use client'

import React, { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { useField } from '@payloadcms/ui'
import { ICON_OPTIONS } from '@/utilities/icons'

export const IconPicker: React.FC<{ path: string; field: any }> = ({ path, field }) => {
    const { value, setValue } = useField<string>({ path })
    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    // Only search within the curated list
    const filteredOptions = ICON_OPTIONS.filter(opt =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opt.value.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const SelectedIcon = value ? (LucideIcons as any)[value] : null

    return (
        <div className="field-type" style={{ marginBottom: '20px', position: 'relative' }}>
            <label className="field-label">
                {field.label}
                {field.required && <span className="required">*</span>}
            </label>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--theme-bg)',
                        border: '1px solid var(--theme-elevation-100)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        color: 'var(--theme-text)'
                    }}
                    title="Click to select icon"
                >
                    {SelectedIcon ? <SelectedIcon size={24} /> : <LucideIcons.Plus size={20} />}
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>
                        {value ? `Selected: ${value}` : 'No icon selected'}
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            padding: '4px 12px',
                            fontSize: '13px',
                            background: 'var(--theme-bg)',
                            border: '1px solid var(--theme-border)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: 'var(--theme-text)'
                        }}
                    >
                        {isOpen ? 'Close Picker' : 'Choose Icon...'}
                    </button>
                    {value && (
                        <button
                            type="button"
                            onClick={() => setValue('')}
                            style={{
                                padding: '4px 12px',
                                fontSize: '13px',
                                background: 'transparent',
                                border: 'none',
                                color: '#ef4444',
                                cursor: 'pointer',
                                marginLeft: '8px'
                            }}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    width: '320px',
                    maxHeight: '400px',
                    background: 'var(--theme-bg)',
                    border: '1px solid var(--theme-border)',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    padding: '16px',
                    marginTop: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}>
                    <input
                        type="text"
                        placeholder="Search icons..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid var(--theme-border)',
                            borderRadius: '6px',
                            fontSize: '14px',
                            outline: 'none',
                            background: 'var(--theme-input-bg)',
                            color: 'var(--theme-text)'
                        }}
                        autoFocus
                    />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '8px',
                        overflowY: 'auto',
                        padding: '4px'
                    }}>
                        {filteredOptions.map((option) => {
                            const Icon = (LucideIcons as any)[option.value]
                            if (!Icon) return null

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        setValue(option.value)
                                        setIsOpen(false)
                                    }}
                                    title={option.label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '8px',
                                        background: value === option.value ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                        border: value === option.value ? '1px solid #3b82f6' : '1px solid transparent',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.1s',
                                        color: value === option.value ? '#3b82f6' : 'var(--theme-text)'
                                    }}
                                >
                                    <Icon size={20} />
                                </button>
                            )
                        })}
                    </div>

                    {filteredOptions.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '20px', color: '#9ca3af', fontSize: '14px' }}>
                            No icons found
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default IconPicker