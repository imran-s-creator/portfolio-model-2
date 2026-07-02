import { supabase } from '@/lib/supabase'

export const fetchProjects = async () => {
  const { data } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  return data || []
}

const STATIC_CERTIFICATES = [
  {
    id: 1,
    title: 'Github Copilot Dev Days – Chennai 2026',
    image_url: '/assets/certificates/cert-github-copilot-devdays.jpg',
  },
  {
    id: 2,
    title: 'Kalvium × Mathesar – Certificate of Participation',
    image_url: '/assets/certificates/cert-kalvium-participation.png',
  },
  {
    id: 3,
    title: 'Kalvium × Mathesar – Certificate of Completion',
    image_url: '/assets/certificates/cert-kalvium-completion.png',
  },
]

export const fetchCertificates = async () => {
  try {
    const { data } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    if (data && data.length > 0) return data
  } catch {
    // fallback to static data
  }

  return STATIC_CERTIFICATES
}

export const fetchTechStacks = async () => {
  const { data } = await supabase
    .from('tech_stack')
    .select('*')
    .order('created_at', {
      ascending: true,
    })

  return data || []
}