'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteProperty } from '@/actions/property';
import { Trash2, Loader2 } from 'lucide-react';

export default function Page({ params }) {
  const router = useRouter();
  const { id } = params;

  const [status, setStatus] = useState('confirm'); // 'confirm', 'deleting', 'done'
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setStatus('deleting');
    try {
      const result = await deleteProperty(id);
      console.log('Delete result:', result);
      setStatus('done');
      setTimeout(() => {
        router.push('/myproperty');
      }, 2000); // redirect after 2 sec
    } catch (err) {
      setError('Failed to delete the property.');
      setStatus('confirm');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center space-y-6">
        {status === 'confirm' && (
          <>
            <Trash2 className="mx-auto text-red-500" size={48} />
            <h2 className="text-2xl font-bold text-gray-800">Delete Property?</h2>
            <p className="text-gray-600">
              Are you sure you want to delete this property? This action cannot be undone.
            </p>
            {error && <p className="text-red-600">{error}</p>}
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => router.back()}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </>
        )}

        {status === 'deleting' && (
          <>
            <Loader2 className="mx-auto animate-spin text-red-500" size={40} />
            <h2 className="text-xl font-semibold text-gray-700">Deleting property...</h2>
          </>
        )}

        {status === 'done' && (
          <>
            <h2 className="text-2xl font-bold text-green-600">Property Deleted!</h2>
            <p className="text-gray-600">Redirecting to your property list...</p>
          </>
        )}
      </div>
    </div>
  );
}
