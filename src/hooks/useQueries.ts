// Simplified version - returns empty data for standalone React app
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export type Program = {
  id: number;
  title: string;
  objective: string;
  focusAreas: string[];
  modules: string[];
  outcomes: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
  photoUrl?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  photoUrl?: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

export function usePrograms() {
  return useQuery<Program[]>({
    queryKey: ['programs'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useGalleryItems() {
  return useQuery<GalleryItem[]>({
    queryKey: ['galleryItems'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useContactForm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      console.log('Contact form submission:', data);
      // In a real app, you would send this to your backend API
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactForms'] });
    },
  });
}

export function usePartnershipInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { companyName: string; contactPerson: string; email: string; message: string }) => {
      console.log('Partnership inquiry:', data);
      // In a real app, you would send this to your backend API
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partnershipInquiries'] });
    },
  });
}

export function useMentorApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { name: string; email: string; profession: string; experience: string; motivation: string }) => {
      console.log('Mentor application:', data);
      // In a real app, you would send this to your backend API
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mentorApplications'] });
    },
  });
}

export type CreatePaymentResponse = {
  checkoutUrl: string;
};

export type PaymentSuccessResponse = {
  payment: {
    amount: bigint;
    status: string;
    paymentMethod: {
      brand: string;
      last4: string;
    };
  };
};

export type PaymentCancelResponse = {
  message: string;
};

export function useCreateDonation() {
  return useMutation<CreatePaymentResponse, Error, { amount: bigint; donorName: string; donorEmail: string }>({
    mutationFn: async (data) => {
      console.log('Creating donation:', data);
      // In a real app, you would send this to your backend API
      // For now, simulate a checkout URL redirect
      // In production, this would redirect to Stripe checkout
      return {
        checkoutUrl: `/donation-success?sessionId=test-session&accountId=test-account&caffeineCustomerId=test-customer`,
      };
    },
  });
}

export function usePaymentSuccess(sessionId: string, accountId: string, caffeineCustomerId: string) {
  return useQuery<PaymentSuccessResponse>({
    queryKey: ['paymentSuccess', sessionId],
    queryFn: async () => {
      console.log('Payment success:', { sessionId, accountId, caffeineCustomerId });
      // In a real app, you would verify the payment with your backend
      return {
        payment: {
          amount: BigInt(50000), // Example: 500.00 in paise
          status: 'succeeded',
          paymentMethod: {
            brand: 'visa',
            last4: '4242',
          },
        },
      };
    },
    enabled: !!sessionId && !!accountId && !!caffeineCustomerId,
    retry: false,
  });
}

export function usePaymentCancel(sessionId: string) {
  return useQuery<PaymentCancelResponse>({
    queryKey: ['paymentCancel', sessionId],
    queryFn: async () => {
      console.log('Payment cancelled:', sessionId);
      // In a real app, you would handle the cancellation with your backend
      return {
        message: 'Payment cancelled successfully',
      };
    },
    enabled: !!sessionId,
    retry: false,
  });
}
