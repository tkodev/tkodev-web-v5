const formatAttribution = (clientName: string, agencyName?: string) => {
  return agencyName ? `${clientName} via ${agencyName}` : clientName
}

export { formatAttribution }
