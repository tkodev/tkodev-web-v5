/**
 * A project's attribution line: the client, with the agency appended as "via" when present.
 *
 * @param clientName - The client the work was built for.
 * @param agencyName - The agency the work was delivered through, if any.
 */
const formatAttribution = (clientName: string, agencyName?: string) => {
  return agencyName ? `${clientName} via ${agencyName}` : clientName
}

export { formatAttribution }
